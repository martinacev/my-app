from fastapi import APIRouter, Depends
from models import UserCreate, UserResponse
from services.user_service import UserService
from dependencies import get_user_service

router = APIRouter(prefix="/users", tags=["users"])


@router.get("", response_model=list[UserResponse])
def get_users(user_service: UserService = Depends(get_user_service)):
    return user_service.list_users()


@router.post("", response_model=UserResponse, status_code=201)
def create_user(
    user: UserCreate,
    user_service: UserService = Depends(get_user_service),
):
    return user_service.register_user(user)