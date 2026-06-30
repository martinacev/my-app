import { useState } from "react";
import useConfirm from "./useConfirm";

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

  function confirmPayment() {
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