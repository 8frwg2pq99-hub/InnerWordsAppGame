// lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind-friendly className merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
