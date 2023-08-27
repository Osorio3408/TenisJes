import React from "react";
import { Facebook, Instagram, Mail, MapPin, Smartphone } from "lucide-react"; // Importar los iconos de Lucide
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white py-6 w-full absolute bottom-0">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10  md:gap-y-4 ">
          <div className="space-y-3">
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-300 text-sm flex items-center gap-x-2">
              <Mail size={14} className="text-red-400" /> Email:
              info@tenisjes.com
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-x-2 ">
              <Smartphone size={14} className="text-red-400" />
              Teléfono: +57 313 7352822
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-x-2 ">
              <MapPin size={14} className="text-red-400" />
              Dirección: CENTRO EMPRESARIAL PRANHA - OFICINA 512
            </p>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mb-4">Marcas</h3>
            {/* Mostrar marcas en 2 filas */}
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-left">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Monastery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Diesel
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  New Balance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Ilimin
                </a>
              </li>
              {/* Marcas adicionales */}
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Nike
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Super Dry
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Lacoste
                </a>
              </li>
              {/* Fin de marcas adicionales */}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Categorías</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Tenis
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Camisetas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Busos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Bolsos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/tenisjesoficial"
                title="Facebook"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} /> {/* Icono de Facebook de Lucide */}
              </a>
              <a
                href="https://www.instagram.com/tenisjes_/"
                title="Instagram"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors duration-300">
                <Instagram size={20} /> {/* Icono de Instagram de Lucide */}
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=3137352822"
                title="WhatsApp"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors duration-300">
                <FaWhatsapp size={20} />{" "}
                {/* Icono de Instagram de React Icons */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="relative top-5" />
      <div className="container mx-auto text-center mt-8">
        <p className="text-gray-300">
          Todos los derechos reservados &copy; {new Date().getFullYear()} Tenis
          Jes
        </p>
      </div>
    </footer>
  );
};
