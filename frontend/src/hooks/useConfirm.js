import { useEffect, useState } from "react";
import { confirmUser } from "../services/userService";

export default function useConfirm() {
  const [status, setStatus] = useState("loading");
  const [name, setName] = useState("");

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    confirmUser(token)
      .then((data) => {
        setName(data.name);

        if (data.message === "Confirmed!") {
          setStatus("success");
        } else if (data.message === "Already confirmed") {
          setStatus("already");
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  return {
    status,
    name,
  };
}