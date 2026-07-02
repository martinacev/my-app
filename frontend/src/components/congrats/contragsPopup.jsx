import Button from "../Button/Button";
import classes from "./CongratsPopup.module.css";

const CongratsPopup = ({ onClose }) => {
  return (
    <div className={classes.overlay} onClick={onClose}>
      <div
        className={classes.card}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.icon}>🎉</div>

        <h2 className={classes.title}>Congratulations!</h2>

        <p className={classes.text}>
          Your registration was successful.
        </p>

        <p className={classes.subtext}>
          Please check your email to confirm your account.
        </p>

        <Button onClick={onClose}>OK</Button>
      </div>
    </div>
  );
};

export default CongratsPopup;