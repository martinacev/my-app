import Header from "./components/Header/Header";
import UserForm from "./components/UseForm/UseForm";
import CongratsPopup from "./components/congrats/contragsPopup";
import ConfirmPage from "./components/confirmModal/confirmPage";

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
      <Header />
      <UserForm
        name={name}
        email={email}
        setName={setName}
        setEmail={setEmail}
        error={error}
        onSubmit={handleSubmit}
      />

      {showPopup && (
        <CongratsPopup onClose={handlePopupClose} />
      )}
    </div>
  );
}

export default App;