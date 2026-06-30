import { createUser } from "../services/userService";

export async function handleSubmit({
  name,
  email,
  setError,
  setShowPopup,
  loadUsers,
}) {
  setError("");

  if (!name.trim() || !email.trim()) {
    setError("Please fill both fields");
    return;
  }

  try {
    await createUser({ name, email });

    loadUsers();
    setShowPopup(true);
  } catch (err) {
    setError(err.message);
  }
}