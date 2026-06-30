import classes from "./CongratsPopup.module.css";

const CongratsPopup = ({ onClose }) => {
  return (
    <div className={classes.overlay} onClick={onClose}>
      <div
        className={classes.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.icon}>🎉</div>

        <h2>Congratulations!</h2>

        <p>Registration successful.</p>

        <p>Check your email.</p>

        <button onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default CongratsPopup;