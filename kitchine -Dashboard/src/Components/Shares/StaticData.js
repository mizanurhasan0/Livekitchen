import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineDashboard,
  AiOutlineDatabase,
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSetting,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiChickenOven } from "react-icons/gi";
import { MdOutlineBlender } from "react-icons/md";
import { GiCoffeeMug } from "react-icons/gi";
import { TbToolsKitchen, TbBrandGoogleAnalytics } from "react-icons/tb";

let SideMenuItem = [
  { path: "/", name: "Dashboard", icon: AiOutlineDashboard },
  {
    path: "/",
    name: "Catelog",
    icon: AiOutlineDatabase,
    subItems: [
      { path: "/productlist", name: "Product List" },
      { path: "/product", name: "Product" },
      { path: "/categorieslist", name: "Categories List" },
      { path: "/category", name: "Category" },
    ],
  },
  {
    path: "/",
    name: "Customers",
    icon: AiOutlineUser,
    subItems: [
      { path: "/customerslist", name: "Customers List" },
      { path: "/customer", name: "Customer" },
    ],
  },
  {
    path: "/",
    name: "Orders",
    icon: AiOutlineShoppingCart,
    subItems: [
      { path: "/orderslist", name: "Orders List" },
      { path: "/orderdetails", name: "Order Details" },
    ],
  },
  { path: "/analytics", name: "Analytics", icon: TbBrandGoogleAnalytics },
  {
    path: "/",
    name: "Settings",
    icon: AiOutlineSetting,
    subItems: [
      { path: "/setting", name: "Setting" },
      { path: "/setting2", name: "Setting 2" },
    ],
  },
];
let orderHistory=[
  {title:"Total sells",amount:"3799.00",filter:"Compared to April 2021"},
  {title:"Average order value",amount:"272.00",filter:"Compared to April 2021"},
  {title:"Total Orders",amount:"578.00",filter:"Compared to April 2021"}
]
export {
  SideMenuItem,orderHistory
};
