  import useConfirmPage from "../../hooks/useConfirmPage";
  import ConfirmLoading from "./ConfirmLoading";
  import ConfirmError from "./ConfirmError";
  import ConfirmAlready from "./ConfirmAlready";
  import ConfirmSuccess from "./ConfirmSuccess";
  import PaymentCard from "../confirmModal/paymentCard";;
  import PaymentModal from "../confirmModal/paymentModal";

  const ConfirmPage = () => {
    const {
      status,
      name,
      paid,
      modalOpen,
      openModal,
      closeModal,
      confirmPayment,
    } = useConfirmPage();

    if (status === "loading") {
      return <ConfirmLoading />;
    }

    if (status === "error") {
      return <ConfirmError />;
    }

    if (status === "already") {
      return <ConfirmAlready name={name} />;
    }

    if (paid) {
      return <ConfirmSuccess name={name} />;
    }

    return (
      <>
        <PaymentCard
          name={name}
          onConfirm={openModal}
        />

        {modalOpen && (
          <PaymentModal
            onClose={closeModal}
            onConfirm={confirmPayment}
          />
        )}
      </>
    );
  };

  export default ConfirmPage;