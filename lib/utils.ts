import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function waitBeforeExecution(timeInMilliseconds: any, callback: () => void) {
  setTimeout(callback, timeInMilliseconds);
}