"""
Central DI factory functions.

All routers import their dependencies from here, keeping wiring logic
in one place and routers free of construction detail.
"""

import os
from fastapi import Depends
from sqlalchemy.orm import Session

from database import get_db
from repositories.user_repository import UserRepository
from services.email import EmailService
from services.user_service import UserService


def get_email_service() -> EmailService:
    """Construct EmailService once per request from env config."""
    return EmailService(
        gmail_user=os.getenv("GMAIL_USER", ""),
        gmail_password=os.getenv("GMAIL_PASSWORD", ""),
        frontend_url=os.getenv("FRONTEND_URL", ""),
    )


def get_user_repository(db: Session = Depends(get_db)) -> UserRepository:
    """Construct UserRepository with the request-scoped DB session."""
    return UserRepository(db)


def get_user_service(
    repo: UserRepository = Depends(get_user_repository),
    email_service: EmailService = Depends(get_email_service),
) -> UserService:
    """Construct UserService with its injected dependencies."""
    return UserService(repo=repo, email_service=email_service)
