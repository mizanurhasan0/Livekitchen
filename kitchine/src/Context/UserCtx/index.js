import { useContext } from "react";
import { User } from "./UserProvider";

export default function(){
    return useContext(User)
}