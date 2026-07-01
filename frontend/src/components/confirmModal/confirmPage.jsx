import useConfirmPage from "../../hooks/useConfirmPage";

import ConfirmLoading from "./ConfirmLoading";
import ConfirmError from "./ConfirmError";
import ConfirmAlready from "./ConfirmAlready";
import ConfirmSuccess from "./ConfirmSuccess";
import PaymentCard from "../confirmModal/paymentCard";
import PaymentModal from "../confirmModal/paymentModal";

import classes from "./ConfirmPage.module.css";

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
    return (
      <div className={classes.container}>
        <ConfirmLoading />
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className={classes.container}>
        <ConfirmError />
      </div>
    );
  }

  if (status === "already") {
    return (
      <div className={classes.container}>
        <ConfirmAlready name={name} />
      </div>
    );
  }

  if (paid) {
    return (
      <div className={classes.container}>
        <ConfirmSuccess name={name} />
      </div>
    );
  }

  return (
    <div className={classes.container}>
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
    </div>
  );
};

export default ConfirmPage;