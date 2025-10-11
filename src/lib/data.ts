import faceOil from "@/assets/Featured/product1.png";
import comb from "@/assets/accesories/comb.png";
import brush from "@/assets/accesories/brush.png";
import bodyWashHero from "@/assets/body-wash-hero.jpg";

export interface Product {
  id: string;
  name: string;
  price?: string;
  images: string[];
  gradient: string;
description: string;
  usage?: string;
  category: 'Care Products' | 'Accessories';
}

export const gradients = [
  "linear-gradient(to right, #6A9113, #141517)",
  "linear-gradient(to right, #243B55, #141E30)",
  "linear-gradient(to right, #9a8478, #1e130c)",
  "linear-gradient(to right, #1e130c, #9a8478)", // for comb
];

export const careProducts: Product[] = [
  {
    id: "face-oil",
    name: "Face Oil",
    price: "399 rs",
    images: [faceOil],
    gradient: gradients[0],
    description: "Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to more.",
    usage: "Apply 2-3 drops to clean, dry skin...",
    category: "Care Products",
  },
  {
    id: "body-wash",
    name: "Body Wash",
    price: "299 rs",
    images: [bodyWashHero],
    gradient: gradients[1],
    description: "Premium body wash formulated with natural ingredients...",
    usage: "Apply to wet skin, work into a rich lather...",
    category: "Care Products",
  },
  { 
    id: "serum", 
    name: "Serum", 
    images: [faceOil], 
    gradient: gradients[1], 
    description: "A serum for your face. Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
    category: "Care Products",
    price: "499 rs",
    usage: "Apply a small amount to face in the morning and evening."
  },
  { 
    id: "body-lotion", 
    name: "Body Lotion", 
    images: [faceOil], 
    gradient: gradients[2], 
    description: "A lotion for your body. Lorem Ipsum is simply dummy text of the printing and typesetting industry.", 
    category: "Care Products",
    price: "349 rs",
    usage: "Apply generously to the entire body."
  },
];

export const accessories: Product[] = [
  {
    id: "wooden-comb",
    name: "Wooden Comb",
    images: [comb],
    gradient: gradients[3],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  more.",
    category: "Accessories",
    price: "199 rs",
    usage: "Use to comb hair."
  },
  {
    id: "shaving-brush",
    name: "Shaving Brush",
    images: [brush],
    gradient: gradients[1],
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  more.",
    category: "Accessories",
    price: "249 rs",
    usage: "Use with shaving cream to create a lather."
  },
];

export const allProducts: Product[] = [...careProducts, ...accessories];