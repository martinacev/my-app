import CongratsPopup from "./components/congrats/contragsPopup";
import ConfirmPage from "./components/confirmModal/confirmPage";
import Globe3DDemoThird from "./components/3d-globe-demo-3";
import WavyBackgroundDemo from "./components/wavy-background-demo";
import TerminalDemo from "./components/terminal-demo";
import Button from "./components/Button/Button";
import classes from "./components/useForm/useForm.module.css";

import { isConfirmPage } from "./utils/router";
import useCreateUser from "./hooks/useCreateUser";

function App() {
  if (isConfirmPage()) {
    return <ConfirmPage />;
  }

  const {
    name,
    email,
    error,
    showPopup,
    setName,
    setEmail,
    handleSubmit,
    handlePopupClose,
  } = useCreateUser();

  return (
    <div>

      <div>
        <Globe3DDemoThird />
      </div>

      <div className="mt-[100px]">
        <WavyBackgroundDemo />
      </div>

      <div>
        <TerminalDemo />
      </div>

      <div className={classes.container + " px-4 max-w-7xl mx-auto my-6"}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className={classes.input + " border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"}
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={classes.input + " border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500"}
        />

        {error && (
          <p className={classes.error}>{error}</p>
        )}

        <Button onClick={handleSubmit}>
          Confirm your presence
        </Button>
      </div>


      {showPopup && (
        <CongratsPopup onClose={handlePopupClose} />
      )}
    </div>
  );
}

export default App;