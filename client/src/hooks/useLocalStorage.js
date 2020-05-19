import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storageValue = window.localStorage.getItem(key);
    if (storageValue !== undefined) {
      return JSON.parse(storageValue);
    } else {
      return defaultValue;
    }
  });

  const setStorageValue = newValue => {
    window.localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setStorageValue];
}
