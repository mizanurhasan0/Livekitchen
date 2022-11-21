import { AiOutlineMail, AiOutlinePhone,AiOutlineShopping } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiChickenOven } from "react-icons/gi";
import { MdOutlineBlender } from "react-icons/md";
import { TbToolsKitchen } from "react-icons/tb";
import { GiCoffeeMug } from "react-icons/gi";
import {mug,blender,cookingtools,oven} from "../../Assets/Index";
import {
  gloves1,
  gloves2,
  gloves3,
  knif1,
  oil1,
  oil2,
  oil3,
  rack1,
  rack2,
  rack3,
} from "../../Assets/Index.js";

let NavItems = [
  { name: "HOME", link: "/" },
  { name: "Shops", link: "/shops" },
  { name: "ABOUT", link: "/about" },
  { name: "CONTACT", link: "/contact" },
];

const ContactInfo = [
  { icon: <AiOutlineMail />, name: "eng.mizanur.hasan@gmail.com" },
  { icon: <AiOutlinePhone />, name: "+880 1818-674298" },
  { icon: <GoLocation />, name: "Mirpur-2, Dhaka-1216" },
];

// const BannerSlider = [
//   {
//     _id: 1,
//     title: "equilibrium",
//     name: "Arseniy Valter ",
//     status: "active",
//     caption: "UPCOMING",
//     button: "View Drop",
//     image: banner1,
//   },
//   {
//     _id: 2,
//     title: "equilibrium",
//     name: "Arseniy Valter ",
//     status: "active",
//     caption: "UPCOMING",
//     button: "View Drop",
//     image: banner2,
//   },
//   {
//     _id: 3,
//     title: "equilibrium",
//     name: "Arseniy Valter ",
//     status: "active",
//     caption: "UPCOMING",
//     button: "View Drop",
//     image: banner3,
//   },
// ];
const CategoryLists = [
  { icon: oven, name: "Cooker & oven" },
  { icon: blender, name: "Blender" },
  { icon: cookingtools, name: "Cookering Tools" },
  { icon: mug, name: "Bottle ,mug ,FlASK" },
];
const Countries = [
  { name: "Bangladesh" },
  { name: "China" },
  { name: "Germany" },
  { name: "Indonesia" },
];
const ProductsData = [
  {
    name: "Oil Spray Bottle",
    Price: "390 Tk",
    oldPrice: "420tk",
    images: [oil1, oil2, oil3],
    description:
      "Material:PP + Glass,Weight:220g,Size:Height 18cm*Diameter 4.2cm,capacity:100ml",
  },
  {
    name: "hand gloves",
    Price: "240 Tk",
    oldPrice: "420tk",
    images: [gloves1, gloves2, gloves3],
    description: `Material: rubber and latex
    Useful for daily household wash dishes, plates
    Dimension: (29x12.5)cm`,
  },
  {
    name: " Kitchen Rack",
    Price: "1850 Tk",
    oldPrice: "2000tk",
    images: [rack1, rack2, rack3],
    description: `Kitchen Trolley Kitchen Storage Rak Dapur Rak Memasak Beroda With Wheels Durable`,
  },
  {
    name: "3Pcs Shrimp Knife",
    Price: "150 Tk",
    oldPrice: "200tk",
    images: [knif1],
    description: `Material: ABS, stainless steel Size: 13x3.5cm Weight: 10g/pc Color: Random`,
  },
  {
    name: "Oil Spray Bottle",
    Price: "390 Tk",
    oldPrice: "420tk",
    images: [oil1, oil2, oil3],
    description:
      "Material:PP + Glass,Weight:220g,Size:Height 18cm*Diameter 4.2cm,capacity:100ml",
  },
  {
    name: "hand gloves",
    Price: "240 Tk",
    oldPrice: "420tk",
    images: [gloves1, gloves2, gloves3],
    description: `Material: rubber and latex
    Useful for daily household wash dishes, plates
    Dimension: (29x12.5)cm`,
  },
];
let FooterInfo = [
  {
    title: "information",
    list: [
      { name: "About us", link: "/" },
      { name: "Contact us", link: "/" },
    ],
  },
  {
    title: "Customer service",
    list: [
      { name: "Security Policy", link: "/" },
      { name: "Orders,Stock availablity & Pricing", link: "/" },
      { name: "Shipping & Replacement", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Terms of use", link: "/" },
    ],
  },
  {
    title: "My Account",
    list: [
      { name: "Customer info", link: "/" },
      { name: "Addresses", link: "/" },
      { name: "Orders", link: "/" },
      { name: "Shopping cart", link: "/" },
      { name: "Wish List", link: "/" },
      { name: "Compare products list", link: "/" },
    ],
  },
];
let faqContact=[
  {title:"How to order submited",description:` The COST Executive Board has decided to extend our Action until
  September 30, 2021. This means that we until then can continue our
  collaboration supported by the COST organizational structure. We
  have funding htmlFor one postponed in-person meeting to be held
  probably in late July`},
  {title:"How to work payment ",description:` The Payment Executive Board has decided to extend our Action until
  September 30, 2021. This means that we until then can continue our
  collaboration supported by the COST organizational structure. We
  have funding htmlFor one postponed in-person meeting to be held
  probably in late July`},
  {title:"How to get product",description:` The Product Executive Board has decided to extend our Action until
  September 30, 2021. This means that we until then can continue our
  collaboration supported by the COST organizational structure. We
  have funding htmlFor one postponed in-person meeting to be held
  probably in late July`},
]
export {
  NavItems,
  ContactInfo,
  CategoryLists,
  ProductsData,
  FooterInfo,
  Countries,
  faqContact
};
