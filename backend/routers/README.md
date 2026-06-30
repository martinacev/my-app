### Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # macOS/Linux
# or
venv\Scripts\activate         # Windows

pip install -r requirements.txt
uvicorn app.main:app --reload
```

The backend will be available at:

```
http://127.0.0.1:8000
```

### Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend will be available at:

```
http://localhost:5173