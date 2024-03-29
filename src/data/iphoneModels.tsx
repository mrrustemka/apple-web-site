import { IProduct } from "./models";
import image_1 from "../images/iphone_14_pro.jpg";
import image_2 from "../images/iphone_14_2.jpg";
import image_3 from "../images/iphone_13.jpg";
import image_4 from "../images/iphone_se.jpg";
import image_5 from "../images/iphone_12.jpg";
import image_6 from "../images/iphone_15_pro.jpeg";
import image_7 from "../images/iphone_15.jpeg";

export const iphoneModels: IProduct[] = [
  {
    id: 1,
    title: "iPhone 15 Pro",
    description: "iPhone. Forged in titanium.",
    price: 999,
    category: "smartphones",
    image: image_6,
    link: "iphone-15-pro",
  },
  {
    id: 2,
    title: "iPhone 15",
    description: "Dynamic Island. For when things just pop up.",
    price: 799,
    category: "smartphones",
    image: image_7,
    link: "iphone-15",
  },
  {
    id: 3,
    title: "iPhone 14 Pro",
    description: "Pro. Beyond.",
    price: 799,
    category: "smartphones",
    image: image_1,
    link: "iphone-14-pro",
  },
  {
    id: 4,
    title: "iPhone 14",
    description: "Big and bigger.",
    price: 699,
    category: "smartphones",
    image: image_2,
    link: "iphone-14",
  },
  {
    id: 5,
    title: "iPhone 13",
    description: "An apple mobile which is nothing like apple.",
    price: 599,
    category: "smartphones",
    image: image_3,
    link: "iphone-13",
  },
  {
    id: 6,
    title: "iPhone SE",
    description: "Fast runs in the family.",
    price: 429,
    category: "smartphones",
    image: image_4,
    link: "iphone-se",
  },
  {
    id: 7,
    title: "iPhone 12",
    description: "Apple Trade In.Get $40 – $600 credit toward your new iPhone.",
    price: 399,
    category: "smartphones",
    image: image_5,
    link: "iphone-12",
  },
];

export default iphoneModels;
