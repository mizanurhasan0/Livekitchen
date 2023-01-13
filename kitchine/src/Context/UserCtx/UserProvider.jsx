import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import UseRequest from "../../Hooks/UseRequest";
import { useCookies } from "react-cookie";
import { useShoppingCart } from "../Shopping/ShoppingCartProvider";

export const User = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userUpdate, setUserUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  // const [carts, setCarts] = useState(false);
  const [cookies] = useCookies();

  const request = UseRequest();
  // fetch user
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
  // console.log(cookies);
  //
  // Get All Category
  async function getCategory() {
    await request({ uri: "category", method: "GET" })
      .then((res) => {
        setCategory(res?.data);
      })
      .catch((err) => console.log(err));
  }
  async function getProducts() {
    await request({ uri: "products", method: "GET" })
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }
  // const getCarts = async () => {
  //   try {
  //     await request({ uri: "carts", method: "GET" })
  //       .then((res) => {
  //         console.log(res.status)
  //         res.status === 401 && setCarts(false)
  //         res.status === 201 && setCarts(res.newInstance)
  //       })
  //       .catch((err) => console.log(err));
  //   } catch (error) {
  //     console.log(error)
  //   }

  // };

  useEffect(() => {
    getCategory();
    getProducts();
    if (cookies.auth) {
      // getCarts();
    }
  }, []);

  useEffect(() => {
    if (cookies.auth) {
      try {
        fetchUser();
      } catch (error) {
        console.log(error)
      }

    }
  }, [userUpdate]);
  // 
  return (
    <User.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        setUserUpdate,
        category,
        products,
        // carts,
        // setCarts,
      }}
    >
      {children}
    </User.Provider>
  );
}
