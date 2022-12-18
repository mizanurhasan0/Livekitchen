import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import UseRequest from "../../Hooks/UseRequest";

export const User = createContext();

export default function UserProvider({ children }) {
  const user = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const request = UseRequest();

  useEffect(() => {
    setIsLoading(true);
    request({ uri: "userprofile", method: "GET" })
      .then((res) => user[1](res.loginProfile))
      .catch(() => user[1](null))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <User.Provider value={{ user, isLoading, setIsLoading }}>
      {children}
    </User.Provider>
  );
}
