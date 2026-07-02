from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import UserModel

router = APIRouter()

@router.get("/confirm")
def get_confirmation_status(token: str, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.token == token).first()
    if not user:
        raise HTTPException(status_code=400, detail="Invalid token")
    
    if user.confirmed:
        return {"name": user.name, "message": "Already confirmed"}
    else:
        return {"name": user.name, "message": "Confirmed!"}

@router.post("/confirm")
def confirm_user_presence(token: str, db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.token == token).first()
    if not user:
        raise HTTPException(status_code=400, detail="Invalid token")
    
    user.confirmed = True
    db.commit()
    return {"name": user.name, "message": "Confirmed successfully"}