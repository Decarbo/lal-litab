'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define the Course type based on usage in Courses page
export interface Course {
  id: number;
  title: string;
  titleHi: string;
  price: number | string; // Handle both string '6000' and number 6000
  image?: string; // Optional image property
  description?: string;
  instructor?: string;
}

interface CartContextType {
  cart: Course[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Course[]>([]);

  // Load cart from local storage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('lalKitabCart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from local storage", error);
      }
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('lalKitabCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (course: Course) => {
    setCart((prevCart) => {
      // Check if item already exists
      if (prevCart.find((item) => item.id === course.id)) {
        return prevCart;
      }
      return [...prevCart, course];
    });
  };

  const removeFromCart = (courseId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
        const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/,/g, '')) : item.price;
        return total + price;
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
