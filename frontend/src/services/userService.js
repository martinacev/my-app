const API = "";

export async function getUsers() {
  const res = await fetch(`${API}/users`);
  return res.json();
}

export async function createUser(user) {
  const res = await fetch(`${API}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.detail);
  }

  return data;
}

export async function confirmUser(token) {
  const res = await fetch(`${API}/confirm?token=${token}`);
  return res.json();
}

export async function submitConfirmation(token) {
  const res = await fetch(`${API}/confirm?token=${token}`, {
    method: "POST",
  });
  return res.json();
}