
export default function PaymentCard({ name, onConfirm }) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>🎉</div>

        <h1 style={styles.title}>Hi {name}!</h1>

        <p style={styles.sub}>
          You're confirmed! Now click below to finalize your spot.
        </p>

        <button
          style={styles.btnPrimary}
          onClick={onConfirm}
        >
          Confirm my presence
        </button>
      </div>
    </div>
  );
}