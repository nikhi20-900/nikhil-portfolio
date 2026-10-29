import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const EASING = {
  power4Out: "cubic-bezier(0.16, 1, 0.3, 1)",
  power3Out: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  expoOut: "cubic-bezier(0.19, 1, 0.22, 1)",
  smooth: "cubic-bezier(0.25, 0.1, 0.25, 1)",
};

