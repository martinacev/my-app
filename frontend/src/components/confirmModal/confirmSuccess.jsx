
export default function ConfirmSuccess({ name }) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>🎉</div>

        <span style={styles.badge}>Confirmed</span>

        <h1 style={styles.title}>See you there, {name}!</h1>

        <p style={styles.sub}>
          Your spot is reserved. Don't forget the $30 — cash or transfer both
          work.
        </p>
      </div>
    </div>
  );
}