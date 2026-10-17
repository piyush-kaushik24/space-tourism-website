import { useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue !== null
        ? (JSON.parse(storedValue) as T)
        : initialValue;
    } catch {
      return initialValue;
    }
  });

  function updateValue(newValue: T) {
    setValue(newValue);

    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error("Failed to save to localStorage:", error);
    }
  }

  return [value, updateValue] as const;
}
