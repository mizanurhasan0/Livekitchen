import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import UseRequest from "../../Hooks/UseRequest";

export const User = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const request = UseRequest();

  useEffect(() => {
    setIsLoading(true);
    request({ uri: "userprofile", method: "GET" })
      .then(({ userProfile }) => setUser(userProfile))
      .catch(() => user[1](null))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <User.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </User.Provider>
  );
}
