import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import UseRequest from "../../Hooks/UseRequest";
import useCookie from 'react-use-cookie';

export const User = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userUpdate, setUserUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [userToken, setUserToken] = useCookie('token', '0');

  const request = UseRequest();
  const fetchUser = () => {
    setIsLoading(true);
    try {
      request({ uri: "userprofile", method: "GET" })
        .then(({ userProfile }) => setUser(userProfile))
        .catch(() => setUser(null))
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log("SOmething wrong");
    }
  };

  //
console.log(userToken)
  // Get All Category
  async function getCategory() {
    await request({ uri: "category", method: "GET" })
      .then((res) => setCategory(res.data))
      .catch((err) => console.log(err));
  }
  async function getProducts() {
    await request({ uri: "products", method: "GET" })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCategory()
    getProducts()
  }, []);

  // useEffect(() => {
  //   fetchUser();
  // }, [userUpdate]);
  return (
    <User.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        setUserUpdate,
        category,products,
      }}
    >
      {children}
    </User.Provider>
  );
}
