import uuid
from fastapi import HTTPException
from models import UserCreate, UserModel
from repositories.user_repository import UserRepository
from services.email import EmailService


class UserService:
    """
    Contains all business logic for user registration and confirmation.

    Dependencies (UserRepository, EmailService) are injected so they can
    be swapped or mocked without touching this class.
    """

    def __init__(self, repo: UserRepository, email_service: EmailService):
        self._repo = repo
        self._email = email_service

    # ------------------------------------------------------------------
    # Queries
    # ------------------------------------------------------------------

    def list_users(self) -> list[UserModel]:
        return self._repo.get_all()

    def get_confirmation_status(self, token: str) -> dict:
        user = self._repo.get_by_token(token)
        if not user:
            raise HTTPException(status_code=400, detail="Invalid token")

        message = "Already confirmed" if user.confirmed else "Confirmed!"
        return {"name": user.name, "message": message}

    # ------------------------------------------------------------------
    # Commands
    # ------------------------------------------------------------------

    def register_user(self, payload: UserCreate) -> UserModel:
        existing = self._repo.get_by_email(payload.email)
        if existing:
            raise HTTPException(status_code=400, detail="Email already registered")

        token = str(uuid.uuid4())
        user = self._repo.create(name=payload.name, email=payload.email, token=token)
        self._email.send_confirmation_email(user.email, user.name, token)
        return user

    def confirm_user(self, token: str) -> dict:
        user = self._repo.get_by_token(token)
        if not user:
            raise HTTPException(status_code=400, detail="Invalid token")

        self._repo.confirm(user)
        return {"name": user.name, "message": "Confirmed successfully"}
