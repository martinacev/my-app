
export default function ConfirmAlready({ name }) {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.icon}>✅</div>
        <h1 style={styles.title}>Already confirmed, {name}!</h1>
        <p style={styles.sub}>
          You're already on the list. See you at the party!
        </p>
      </div>
    </div>
  );
}