import { generateRandomId } from "./generate-random-id";
import { Picture } from "../types/picture";

export const PICTURES: Picture[] = [
  {
    id: generateRandomId(),
    path: "/pics/picture01.jpeg",
    description: "Mixed Grill Lunch.",
    camera: "iPhone XR",
    size: "5.09MB",
  },
  {
    id: generateRandomId(),
    path: "/pics/picture02.jpeg",
    description: "My Prisma & Next.js Stickers.",
    camera: "iPhone XR",
    size: "5.24MB",
  },
  {
    id: generateRandomId(),
    path: "/pics/picture03.jpg",
    description: "Holiday Inn hotel In Kenya.",
    camera: "iPhone 15",
    size: "8.7MB",
  },
  {
    id: generateRandomId(),
    path: "/pics/picture04.jpg",
    description: "Kenyan Resort.",
    camera: "iPhone 15",
    size: "12.5MB",
  },
  {
    id: generateRandomId(),
    path: "/pics/picture05.jpg",
    description: "British Chips.",
    camera: "iPhone 15",
    size: "7.3MB",
  },
  {
    id: generateRandomId(),
    path: "/pics/picture06.jpg",
    description: "A Nice View.",
    camera: "iPhone 15",
    size: "9.6MB",
  },
  {
    id: generateRandomId(),
    path: "/pics/picture07.jpg",
    description: "MrSuicideSheep Hoodie.",
    camera: "iPhone 15",
    size: "9.8MB",
  },
  {
    id: generateRandomId(),
    path: "/pics/picture08.jpg",
    description: "Hot Chocolate With Cream.",
    camera: "iPhone 15",
    size: "6.7MB",
  },
  {
    id: generateRandomId(),
    path: "/pics/picture09.jpeg",
    description: "My Vercel Swag.",
    camera: "iPhone 15",
    size: "662KB",
  },
];
