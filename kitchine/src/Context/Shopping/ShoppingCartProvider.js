import React, { createContext, useContext, useEffect, useState } from 'react'
// import useLocalStorage from '../../Hooks/useLocalStorage';
import UseRequest from '../../Hooks/UseRequest';

export const ShoppingCartContext = createContext();
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export default function ShoppingCartProvider({ children }) {
  // const [cartItems,setCartItems]=useLocalStorage('shopping-cart',[])
  const [cartItems, setCartItems] = useState([]);
  const [cartReload, setCartReload] = useState(false)
  const req = UseRequest();


  const fetchCarts = async () => {
    try {
      await req({ uri: "carts", method: "GET" })
        .then((res) => {
          res.status === 401 && setCartItems([])
          res.status === 201 && setCartItems(res.newInstance.products)
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchCarts();
    
  }, [cartReload])
  // const cartQuantity = 0;
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  // function getItemQuantity(id) {
  //   return cartItems.find(item => item.id === id)?.quantity || 0
  // }
  function increaseCartQuantity(id, quantity) {
    try {
      req({ uri: "carts", method: "POST", data: { productId: id, quantity } }).then(res => {
        setCartItems(res.products)
        setCartReload(!cartReload)
      })

    } catch (error) {
      console.log(error)
    }

  }
  // function decreaseCartQuantity(id) {
  //   setCartItems(currItems => {
  //     if (currItems.find(item => item.id === id)?.quantity === 1) {
  //       return currItems.filter(item => item.id !== id)
  //     } else {
  //       return currItems.map(item => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity - 1 }
  //         } else {
  //           return item
  //         }
  //       })
  //     }
  //   })
  // }
  function removeFromCart(id) {
    try {
    return req({ uri: `carts/${id}`, method: "PATCH", data: {} }).then(res => {
        console.log(res)
        if (res.status === 200) {
          setCartReload(!cartReload)
          return true;
            // setCartItems(res?.newInstance?.products)
            // 
        }else{
          return false
        }
      })

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <ShoppingCartContext.Provider value={{ removeFromCart, increaseCartQuantity, cartQuantity, cartItems, fetchCarts,setCartReload }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}
