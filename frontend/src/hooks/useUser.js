import { useEffect, useState } from "react";
import * as userService from "../services/userService";

export default function useUsers() {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const data = await userService.getUsers();
    setUsers(data);
  }

  useEffect(() => {
    loadUsers();
  }, []);

  return {
    users,
    loadUsers,
  };
}