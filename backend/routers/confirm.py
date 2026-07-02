from fastapi import APIRouter, Depends
from services.user_service import UserService
from dependencies import get_user_service

router = APIRouter()


@router.get("/confirm")
def get_confirmation_status(
    token: str,
    user_service: UserService = Depends(get_user_service),
):
    return user_service.get_confirmation_status(token)


@router.post("/confirm")
def confirm_user_presence(
    token: str,
    user_service: UserService = Depends(get_user_service),
):
    return user_service.confirm_user(token)