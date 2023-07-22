import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react"; // Importar los iconos de Lucide

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-neutral-950 to-neutral-900 py-4">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-white font-bold text-5xl flex">
              TENIS <p className="text-red-600 font-extrabold">JES</p>
            </Link>
          </div>
          <div className="space-x-4 flex gap-x-4">
            <div className="hidden md:flex gap-x-4 space-x-4">
              <Link
                to="/products/tenis"
                className="block text-white text-xl hover:text-gray-300">
                Tenis
              </Link>
              <Link
                to="/products/camisetas"
                className="block text-white text-xl hover:text-gray-300">
                Camisetas
              </Link>
              <Link
                to="/products/busos"
                className="block text-white text-xl hover:text-gray-300">
                Busos
              </Link>
              <Link
                to="/products/busos"
                className="block text-white text-xl hover:text-gray-300">
                Chaquetas
              </Link>
              <Link
                to="/products/busos"
                className="block text-white text-xl hover:text-gray-300">
                Perfumes
              </Link>
              <Link
                to="/products/busos"
                className="block text-white text-xl hover:text-gray-300">
                Jeans
              </Link>
              <Link
                to="/products/busos"
                className="block text-white text-xl hover:text-gray-300">
                Relojes
              </Link>
              <Link
                to="/products/busos"
                className="block text-white text-xl hover:text-gray-300">
                Gorras
              </Link>
            </div>
            <div className="relative inline-block text-left">
              {/* Ajustamos el atributo "hidden" en función de la resolución */}
              <button
                onClick={toggleMenu}
                className={`text-white focus:outline-none md:hidden block`}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
              </button>
            </div>
          </div>
        </div>
        {/* Menú desplegable para dispositivos móviles */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link
              to="/products/tenis"
              className="block text-white hover:text-gray-300">
              Tenis
            </Link>
            <Link
              to="/products/camisetas"
              className="block text-white hover:text-gray-300">
              Camisetas
            </Link>
            <Link
              to="/products/busos"
              className="block text-white hover:text-gray-300">
              Busos
            </Link>
            <Link
              to="/products/busos"
              className="block text-white hover:text-gray-300">
              Chaquetas
            </Link>
            <Link
              to="/products/busos"
              className="block text-white hover:text-gray-300">
              Perfumes
            </Link>
            <Link
              to="/products/busos"
              className="block text-white hover:text-gray-300">
              Jeans
            </Link>
            <Link
              to="/products/busos"
              className="block text-white hover:text-gray-300">
              Relojes
            </Link>
            <Link
              to="/products/busos"
              className="block text-white hover:text-gray-300">
              Gorras
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
