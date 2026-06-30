const SuccessMessage = ({ onReset }) => {
  return (
    <div className={classes.container}>
      <div className={classes.icon}>📧</div>

      <h2>Check your email!</h2>

      <p>
        We sent a confirmation link to your inbox.
      </p>

      <button onClick={onReset}>
        Register another
      </button>
    </div>
  );
};

export default SuccessMessage;