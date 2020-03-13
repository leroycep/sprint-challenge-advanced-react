import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode() {
  const [storageValue, setStorageValue] = useLocalStorage("dark-mode", false);

  useEffect(() => {
    if (storageValue) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [storageValue]);

  return [storageValue, setStorageValue];
}
