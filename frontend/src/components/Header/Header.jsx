import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        Confirm Presence
      </h1>
    </div>
  );
};

export default Header;