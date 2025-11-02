import { generateRandomId } from "./generate-random-id";
import { Picture } from "../types/picture";

export const PICTURES: Picture[] = [
  {
    id: generateRandomId(),
    country: "UK",
    path: "/pics/picture01.jpeg",
    description: "Mixed Grill Lunch",
    camera: "iPhone XR",
    size: "5.09MB",
  },
  {
    id: generateRandomId(),
    country: "UK",
    path: "/pics/picture02.jpeg",
    description: "My Prisma & Next.js Stickers.",
    camera: "iPhone XR",
    size: "5.24MB",
  },
  {
    id: generateRandomId(),
    country: "Kenya",
    path: "/pics/picture03.jpg",
    description: "Holiday Inn hotel In Kenya.",
    camera: "iPhone 15",
    size: "8.7MB",
  },
  {
    id: generateRandomId(),
    country: "Kenya",
    path: "/pics/picture04.jpg",
    description: "Kenyan Resort.",
    camera: "iPhone 15",
    size: "12.5MB",
  },
  {
    id: generateRandomId(),
    country: "UK",
    path: "/pics/picture05.jpg",
    description: "British Chips.",
    camera: "iPhone 15",
    size: "7.3MB",
  },
];
