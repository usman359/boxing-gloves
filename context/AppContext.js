"use client";
import React, { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      setOpen(false);
    }
  }, [items]);

  const addToCart = (newValue, quantity, color, size) => {
    setOpenDialog(false);
    // Create a new item object with quantity included
    const newItem = { ...newValue, quantity, color, size };
    setItems([...items, newItem]);
    setOpen(true);
  };

  console.log(items);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        addToCart,
        open,
        setOpen,
        openDialog,
        setOpenDialog,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
