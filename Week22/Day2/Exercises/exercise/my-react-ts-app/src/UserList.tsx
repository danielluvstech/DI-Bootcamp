import React, { useEffect, useState } from "react";

// Match JSONPlaceholder /users
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Unknown error");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading users…</p>;
  if (error) return <p style={{ color: "crimson" }}>Error: {error}</p>;

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>
          <strong>{u.name}</strong> ({u.username}) — {u.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;