// ProductContext.jsx
import React, { createContext, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      name: "Gorra",
      image: "/gorra1.webp",
      brand: "Monastery",
      price: "95000",
      category: "Gorras",
    },
    {
      name: "Perfume",
      image: "/perfume1.webp",
      brand: "AL HARAMAIR",
      price: "95000",
      category: "Perfumes",
    },
    {
      name: "Tenis",
      image: "/tennis1.webp",
      brand: "Diesel",
      price: "95000",
      category: "tenis",
    },
    {
      name: "Chaqueta",
      image: "/chaqueta.webp",
      brand: "Super Dry",
      price: "95000",
      category: "Chaquetas",
    },
    {
      name: "Gorra",
      image: "/gorra2.webp",
      brand: "Monastery",
      price: "95000",
      category: "Gorras",
    },
    {
      name: "Gorra",
      image: "/gorra4.webp",
      brand: "Monastery",
      price: "95000",
      category: "Gorras",
    },
    {
      name: "Buso",
      image: "/buso1.webp",
      brand: "Diesel",
      price: "95000",
      category: "Busos",
    },
    {
      name: "Buso",
      image: "/buso2.webp",
      brand: "Diesel",
      price: "95000",
      category: "Busos",
    },
    {
      name: "Bolso",
      image: "/bolso1.webp",
      brand: "Diesel",
      price: "95000",
      category: "bolsos",
    },
    {
      name: "Camiseta",
      image: "/camiseta1.webp",
      brand: "Monastery",
      price: "95000",
      category: "Camisetas",
    },
    {
      name: "Reloj",
      image: "/Reloj1.webp",
      brand: "Diesel",
      price: "95000",
      category: "Relojes",
    },

    {
      name: "Perfume",
      image: "/perfume2.webp",
      brand: "Badee Al Oud",
      price: "95000",
      category: "Perfumes",
    },
    {
      name: "Perfume",
      image: "/perfume3.webp",
      brand: "Ilmin",
      price: "95000",
      category: "Perfumes",
    },
    {
      name: "Perfume",
      image: "/perfume4.webp",
      brand: "Ilmin",
      price: "95000",
      category: "Perfumes",
    },
    {
      name: "Perfume",
      image: "/perfume5.webp",
      brand: "Ilmin",
      price: "95000",
      category: "Perfumes",
    },
    {
      name: "Perfume",
      image: "/perfume6.webp",
      brand: "Orientica",
      price: "95000",
      category: "Perfumes",
    },
    {
      name: "Tenis",
      image: "/tennis2.webp",
      brand: "Lacoste",
      price: "95000",
      category: "tenis",
    },
    {
      name: "Tenis",
      image: "/tennis3.webp",
      brand: "Lacoste",
      price: "95000",
      category: "tenis",
    },
    {
      name: "Tenis",
      image: "/tennis4.webp",
      brand: "Lacoste",
      price: "95000",
      category: "tenis",
    },
    {
      name: "Tenis",
      image: "/tennis5.webp",
      brand: "Diesel",
      price: "95000",
      category: "tenis",
    },
    {
      name: "Tenis",
      image: "/tennis6.webp",
      brand: "Diesel",
      price: "95000",
      category: "tenis",
    },
    {
      name: "Tenis",
      image: "/tennis7.webp",
      brand: "Diesel",
      price: "95000",
      category: "tenis",
    },
    {
      name: "Tenis",
      image: "/tennis8.webp",
      brand: "Nike",
      price: "95000",
      category: "tenis",
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
