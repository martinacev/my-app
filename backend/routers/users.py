import uuid
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import UserModel, UserCreate, UserResponse
from services.email import send_confirmation_email

router = APIRouter(prefix="/users", tags=["users"])

@router.get("", response_model=list[UserResponse])
def get_users(db: Session = Depends(get_db)):
    return db.query(UserModel).order_by(UserModel.created_at.desc()).all()

@router.post("", response_model=UserResponse, status_code=201)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(UserModel).filter(UserModel.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="Email already registered")
    token = str(uuid.uuid4())
    new_user = UserModel(name=user.name, email=user.email, token=token)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    send_confirmation_email(new_user.email, new_user.name, token)
    return new_user