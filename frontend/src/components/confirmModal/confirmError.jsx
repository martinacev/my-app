
export default function ConfirmError() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>❌</div>
        <h1 style={styles.title}>Invalid link</h1>
        <p style={styles.sub}>
          This confirmation link is invalid or has expired.
        </p>
      </div>
    </div>
  );
}