import classes from "./useForm.module.css";
import Button from "../Button/Button";

const UserForm = ({
  name,
  email,
  setName,
  setEmail,
  error,
  onSubmit,
}) => {
  return (
    <div className={classes.container}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className={classes.input}
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={classes.input}
      />

      {error && (
        <p className={classes.error}>{error}</p>
      )}

      <Button onClick={onSubmit}>
        Confirm your presence
      </Button>
    </div>
  );
};

export default UserForm;