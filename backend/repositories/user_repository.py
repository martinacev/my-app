from typing import Optional
from sqlalchemy.orm import Session
from models import UserModel


class UserRepository:
    """Encapsulates all database access for UserModel."""

    def __init__(self, db: Session):
        self._db = db

    def get_all(self) -> list:
        return (
            self._db.query(UserModel)
            .order_by(UserModel.created_at.desc())
            .all()
        )

    def get_by_email(self, email: str) -> Optional[UserModel]:
        return (
            self._db.query(UserModel)
            .filter(UserModel.email == email)
            .first()
        )

    def get_by_token(self, token: str) -> Optional[UserModel]:
        return (
            self._db.query(UserModel)
            .filter(UserModel.token == token)
            .first()
        )

    def create(self, name: str, email: str, token: str) -> UserModel:
        user = UserModel(name=name, email=email, token=token)
        self._db.add(user)
        self._db.commit()
        self._db.refresh(user)
        return user

    def confirm(self, user: UserModel) -> UserModel:
        user.confirmed = True
        self._db.commit()
        self._db.refresh(user)
        return user
