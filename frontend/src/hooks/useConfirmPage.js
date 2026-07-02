import { useState } from "react";
import useConfirm from "./useConfirm";
import { submitConfirmation } from "../services/userService";

export default function useConfirmPage() {
  const { status, name } = useConfirm();

  const [modalOpen, setModalOpen] = useState(false);
  const [paid, setPaid] = useState(false);

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

  async function confirmPayment() {
    const token = new URLSearchParams(window.location.search).get("token");
    if (token) {
      try {
        await submitConfirmation(token);
      } catch (err) {
        console.error("Error during confirmation submission:", err);
      }
    }
    setPaid(true);
    setModalOpen(false);
  }

  return {
    status,
    name,
    modalOpen,
    paid,
    openModal,
    closeModal,
    confirmPayment,
  };
}