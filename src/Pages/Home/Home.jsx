import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { ChevronRight, ChevronLeft } from "lucide-react"; // Importar los iconos de Lucide
import { FaWhatsapp } from "react-icons/fa"; // Importar el ícono de WhatsApp de react-icons

export const Home = () => {
  const brands = [
    {
      name: "Monastery",
      logo: "/monastery-logo.webp",
    },
    {
      name: "Diesel",
      logo: "/diesel-logo.webp",
    },
    {
      name: "New Balance",
      logo: "/new-balance-logo.webp",
    },
    {
      name: "Ilimin",
      logo: "/ilimin-logo.webp",
    },
  ];
  const products = [
    {
      name: "Gorra 1",
      image: "/gorra1.webp",
      brand: "Monastery",
      price: "95.000",
    },
    {
      name: "Perfume",
      image: "/perfume1.webp",
      brand: "AL HARAMAIR",
      price: "95.000",
    },
    {
      name: "Tennis",
      image: "/tennis1.webp",
      brand: "Diesel",
      price: "95.000",
    },
    {
      name: "Chaqueta",
      image: "/chaqueta.webp",
      brand: "Super Dry",
      price: "95.000",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="bg-neutral-900 text-white">
        <div className="container mx-auto py-5 md:py-16 px-2 md:px-0">
          <div className="w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
              ¡Los mejores tenis y ropa de moda en Tenis Jes!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8  text-justify">
              En <strong>Tenis Jes</strong>, encontrarás una amplia selección de
              tenis y ropa de las mejores marcas del mercado. Somos
              distribuidores autorizados de Monastery, Diesel, New Balance e
              Ilimin. Tenemos todo lo que necesitas para lucir a la moda y estar
              cómodo a la vez. Desde tenis deportivos hasta camisetas, jeans,
              busos, gorras, lociones, sacos, bolsos y relojes, ¡lo tenemos
              todo! Visita nuestra tienda en <strong>Manizales</strong> y
              descubre nuestros productos destacados. ¡Te esperamos!
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 place-content-center w-full">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-neutral-800 w-auto md:w-auto rounded-md flex flex-col items-center shadow-md overflow-hidden transform transition-transform hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-auto h-32 mx-auto mt-4"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {brand.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sección destacada */}
          <div className="mt-16">
            <h2 className="text-2xl md:text-4xl font-light text-center py-4 text-white mb-4">
              ¡Descubre nuestros productos destacados!
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center place-items-center w-full">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="w-96 md:w-80 lg:w-96 bg-neutral-700 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                  <div className="card-img w-auto flex justify-center items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="object-cover w-52"
                    />
                  </div>
                  <div className="px-4 py-4 text-center">
                    <h3 className="text-xl font-bold text-white mb-2 text-center">
                      {product.name}
                    </h3>
                    <p className="text-gray-300">{product.brand}</p>
                    <hr className="my-3" />
                    <div className="card-footer">
                      <div className="card-price">
                        <span>$</span> {product.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="fixed bottom-8 right-8 animate-pulse z-50">
          <a
            href="https://api.whatsapp.com/send?phone=3137352822"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-md transition-transform transform hover:scale-110 animated infinite pulse">
            <FaWhatsapp size={24} className="text-white mr-2" />
            <span className="text-white font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
