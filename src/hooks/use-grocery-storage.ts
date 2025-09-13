import { useState } from 'react';
import { ShoppingListItem } from '@/lib/types';

export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((prev: T) => T)) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((prev: T) => T)) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export function useShoppingList() {
  const [shoppingList, setShoppingList] = useLocalStorage<ShoppingListItem[]>('groceryShoppingList', []);
  
  const addItem = (item: ShoppingListItem) => {
    setShoppingList(prev => {
      // Check if item already exists
      const existingIndex = prev.findIndex(existing => existing.id === item.id);
      if (existingIndex !== -1) {
        // Update quantity if item exists
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + item.quantity
        };
        return updated;
      }
      // Add new item
      return [...prev, item];
    });
  };

  const removeItem = (itemId: string) => {
    setShoppingList(prev => prev.filter(item => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }
    setShoppingList(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const updateNotes = (itemId: string, notes: string) => {
    setShoppingList(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, notes } : item
      )
    );
  };

  const toggleCompleted = (itemId: string) => {
    setShoppingList(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const clearCompleted = () => {
    setShoppingList(prev => prev.filter(item => !item.completed));
  };

  const clearAll = () => {
    setShoppingList([]);
  };

  return {
    shoppingList,
    addItem,
    removeItem,
    updateQuantity,
    updateNotes,
    toggleCompleted,
    clearCompleted,
    clearAll
  };
}

export function useGrocerySettings() {
  return useLocalStorage('grocerySettings', {
    defaultView: 'browse' as 'browse' | 'list',
    showCompleted: true,
    sortOrder: 'name' as 'name' | 'category' | 'added' | 'completed'
  });
}