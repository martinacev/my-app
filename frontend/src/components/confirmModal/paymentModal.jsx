import Button from "../Button/Button";
export default function PaymentModal({
  onClose,
  onConfirm,
}) {
  return (
    <div
      style={styles.overlay}
      onClick={(e) =>
        e.target === e.currentTarget && onClose()
      }
    >
      <div style={styles.modal}>
        <h2 style={styles.modalTitle}>
          One small thing... 💸
        </h2>

        <p style={styles.modalSub}>
          To confirm your spot, we kindly ask for a small contribution toward
          the party costs.
        </p>

        <div style={styles.amount}>$30</div>

        <p style={styles.hint}>
          Pay via Revolut, PayPal, or cash on arrival.
        </p>

        <Button
          style={{
            ...styles.btnPrimary,
            width: "100%",
            marginBottom: 10,
          }}
          onClick={onConfirm}
        >
          I'll pay — confirm my spot
        </Button>

        <Button
          onClick={onClose}
        >
          Maybe later
        </Button>
      </div>
    </div>
  );
}