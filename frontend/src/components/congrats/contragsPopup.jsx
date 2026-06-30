import classes from "./CongratsPopup.module.css";
import Button from "../Button/Button";
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

        <Button onClick={onClose}>
          OK
        </Button>
      </div>
    </div>
  );
};

export default CongratsPopup;