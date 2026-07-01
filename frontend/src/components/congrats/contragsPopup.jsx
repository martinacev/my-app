
import Button from "../Button/Button";
const CongratsPopup = ({ onClose }) => {
  return (
    <div onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
      >
        <div>🎉</div>

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