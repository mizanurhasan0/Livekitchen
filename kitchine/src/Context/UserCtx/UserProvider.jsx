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
const [categories,setCategories]=useState([])
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

// Get All Category
  const loadData={
    categoris:null,
    products:null,
    catInit:async function(){
      await request({uri:"category",method:"GET"}).then(res=>setCategories(res.data))
    },
    proInit:async function(){
     await request({uri:"products",method:"GET"})
    }
  }
  useEffect(() => {
    (async()=>{
    await loadData.catInit()
      await loadData.proInit();
    })();
    // fetchUser();
  }, []);

  // useEffect(() => {
  //   fetchUser();
  // }, [userUpdate]);
  return (
    <User.Provider
      value={{ user, setUser, isLoading, setIsLoading, setUserUpdate,loadData,categories }}
    >
      {children}
    </User.Provider>
  );
}
