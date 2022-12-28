import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import UseRequest from "../../Hooks/UseRequest";

export const User = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userUpdate, setUserUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const request = UseRequest();

  const fetchUser = () => {
    setIsLoading(true);
    try {
      request({ uri: "userprofile", method: "GET" })
      .then(({ userProfile }) => setUser(userProfile))
      .catch(() => setUser(null))
      .finally(() => setIsLoading(false));
    } catch (error) {
      console.log("SOmething wrong")
    }
  
    
  };

  //
  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    fetchUser();
  }, [userUpdate]);

  return (
    <User.Provider
      value={{ user, setUser, isLoading, setIsLoading, setUserUpdate }}
    >
      {children}
    </User.Provider>
  );
}
