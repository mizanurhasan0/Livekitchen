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

let OrdersNav = [
  { path: "/dashboard/orders", name: "All Orders", active: null },
  {
    path: "/dashboard/orders?status=pending",
    name: "Pending",
    active: "pending",
  },
  {
    path: "/dashboard/orders?status=delivered",
    name: "Delivered",
    active: "delivered",
  },
  { path: "/dashboard/orders?status=paid", name: "Paid", active: "paid" },
  { path: "/dashboard/orders?status=unpaid", name: "Unpaid", active: "unpaid" },
];
let SideMenuItem = [
  { path: "/dashboard", name: "Dashboard", icon: AiOutlineDashboard },
  {
    path: "/dashboard/products",
    name: "Products",
    icon: AiOutlineDatabase,
    subItems: [
      { path: "/dashboard/products", name: "Product" },
      { path: "/dashboard/category", name: "Categories List" },
    ],
  },
  {
    path: "/dashboard/customers",
    name: "Customers",
    icon: AiOutlineUser,
  },
  {
    path: "/dashboard/orders",
    name: "Orders",
    icon: AiOutlineShoppingCart,
  },
  {
    path: "/dashboard/analytics",
    name: "Analytics",
    icon: TbBrandGoogleAnalytics,
  },
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
let orderHistory = [
  { title: "Total sells", amount: "3799.00", filter: "Compared to April 2021" },
  {
    title: "Average order value",
    amount: "272.00",
    filter: "Compared to April 2021",
  },
  { title: "Total Orders", amount: "578.00", filter: "Compared to April 2021" },
];
let tableDb = {
  head: [
    {
      name: "ID Number",
      key: "id",
      isImage: false,
    },
    {
      name: "Item Details",
      key: "description",
      isImage: false,
    },
    {
      name: "Received Orders",
      key: "orders",
      isImage: false,
    },
    {
      name: "Listing Price",
      key: "price",
      isImage: false,
    },
    {
      name: "Listing Date",
      key: "createdDate",
      isImage: false,
    },
  ],
  data: [
    {
      id: "135638494",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638495",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638496",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638497",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638498",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638499",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638410",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638411",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638412",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638413",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638414",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638415",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638416",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638417",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638418",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638419",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
    {
      id: "135638420",
      description: "Dori  tos Heimer Miller Sofa (Mint Condition)",
      orders: "Timeout script",
      price: "$6473",
      date: "Mon, 5/25/19, 2:53:37 PM",
    },
  ],
  optionData: [
    {
      name: "View",
      action: () => {
        console.log("view");
      },
    },
    {
      name: "Update",
      action: () => {
        console.log("Update");
      },
    },
    {
      name: "Delete",
      action: () => {
        console.log("Delete");
      },
    },
  ],
};
let TblProductHeader = [
  {
    name: "Name",
    key: "name",
    imgDir: "products",
  },
  {
    name: "Status",
    key: "isActive",
    imgDir: "products",
  },
  {
    name: "Category",
    key: "category",
    imgDir: "products",
  },
  {
    name: "Qty",
    key: "qty",
    imgDir: "products",
  },
  {
    name: "Price",
    key: "price",
    imgDir: "products",
  },
  {
    name: "Buy",
    key: "buy",
    imgDir: "products",
  },
  {
    name: "Listing Date",
    key: "createdDate",
    imgDir: "products",
  },
];
let TblCategoryHeader = [
  {
    name: "Category Name",
    key: "name",
    imgDir: "category",
  },
  {
    name: "Visibility",
    key: "isActive",
    imgDir: "category",
  },
];
let ActiveOption = [
  { name: "Public", _id: "true" },
  { name: "Private", _id: "false" },
];

export {
  SideMenuItem,
  orderHistory,
  tableDb,
  OrdersNav,
  TblProductHeader,
  TblCategoryHeader,
  ActiveOption,
};
