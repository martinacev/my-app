import { useState } from "react";
import { createUser } from "../services/userService";
import useUsers from "./useUser";

export default function useCreateUser() {
  const { loadUsers } = useUsers();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit() {
    setError("");

    if (!name.trim() || !email.trim()) {
      setError("Please fill both fields");
      return;
    }

    try {
      await createUser({
        name,
        email,
      });

      await loadUsers();

      setShowPopup(true);
    } catch (err) {
      setError(err.message ?? "Something went wrong");
    }
  }

  function handlePopupClose() {
    setShowPopup(false);

    setName("");
    setEmail("");
    setError("");
  }

  return {
    name,
    email,
    error,
    showPopup,

    setName,
    setEmail,

    handleSubmit,
    handlePopupClose,
  };
}