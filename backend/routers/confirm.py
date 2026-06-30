from fastapi import APIRouter, HTTPException
from fastapi.middleware.cors import CORSMiddleware

router = APIRouter()

valid_tokens = set() 

@router.post("/api/confirm")
async def confirm_presence(token: str):
    if token not in valid_tokens:
        raise HTTPException(status_code=400, detail="Invalid or expired token.")
    valid_tokens.discard(token)  # mark as used
    return {"message": "Confirmed"}