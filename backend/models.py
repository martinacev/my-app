from sqlalchemy import Column, Integer, String, DateTime, Boolean
from sqlalchemy.sql import func
from pydantic import BaseModel, ConfigDict
from database import Base

class UserModel(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    token = Column(String(36), nullable=True)        # ← added
    confirmed = Column(Boolean, default=False)        # ← added
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class UserCreate(BaseModel):
    name: str
    email: str

class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    model_config = ConfigDict(from_attributes=True)