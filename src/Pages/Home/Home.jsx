import React, { useContext } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { ChevronRight, ChevronLeft } from "lucide-react"; // Importar los iconos de Lucide
import { FaWhatsapp } from "react-icons/fa"; // Importar el ícono de WhatsApp de react-icons
import { ProductContext } from "../../Context/ProductContext";

export const Home = () => {
  const { products } = useContext(ProductContext);
  const latestProducts = products.slice(0, 4);

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
      name: "Ilmin",
      logo: "/ilimin-logo.webp",
    },
  ];

  const categories = [
    {
      name: "Tenis",
      image: "/tennis1.webp",
      description:
        "Encuentra una gran variedad de tenis deportivos de las mejores marcas para llevar tu estilo y rendimiento al siguiente nivel.",
    },
    {
      name: "Perfumes",
      image: "/perfume1.webp",
      description:
        "Descubre nuestra selección de fragancias y perfumes de alta calidad para hombres y mujeres, perfectos para cualquier ocasión.",
    },
    {
      name: "Gorras",
      image: "/gorra1.webp",
      description:
        "Completa tu look con nuestras modernas y cómodas gorras, disponibles en una variedad de estilos y colores.",
    },
    {
      name: "Chaquetas",
      image: "/chaqueta.webp",
      description:
        "Mantente abrigado y con estilo con nuestras chaquetas de moda, ideales para cualquier temporada del año.",
    },
    {
      name: "Relojes",
      image: "/Reloj1.webp",
      description:
        "Añade un toque de elegancia a tu muñeca con nuestros relojes de alta calidad, disponibles en distintos diseños y materiales.",
    },
    {
      name: "Bolsos",
      image: "/bolso1.webp",
      description:
        "Descubre nuestra colección de bolsos y mochilas, perfectos para llevar tus pertenencias con estilo y comodidad.",
    },
    {
      name: "Camisetas",
      image: "/camiseta1.webp",
      description:
        "Encuentra las camisetas más modernas y cómodas para tu día a día, disponibles en una variedad de diseños y colores.",
    },
    {
      name: "Busos",
      image: "/buso1.webp",
      description:
        "Eleva tu look casual con nuestros busos de moda, perfectos para un estilo relajado y con un toque de sofisticación.",
    },
    // Agrega más categorías aquí si es necesario
  ];
  return (
    <div className="relative">
      <Navbar />
      <div className="bg-neutral-900 text-white">
        <div className="container mx-auto py-5 md:py-16 px-2 md:px-0 h-full">
          <div className="w-full">
            <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4 text-center">
              ¡La mejor ropa de moda en Tenis Jes!
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8  text-justify">
              En <strong>Tenis Jes</strong>, encontrarás una amplia selección de
              tenis y ropa de las mejores marcas del mercado. Somos
              distribuidores autorizados de Monastery, Diesel, New Balance e
              Ilimin. Tenemos todo lo que necesitas para lucir a la moda y estar
              cómodo a la vez. Desde tenis deportivos hasta camisetas, Bolsos,
              busos, gorras, lociones, bolsos y relojes, ¡lo tenemos todo!
              Visita nuestra tienda en <strong>Manizales</strong> y descubre
              nuestros productos destacados. ¡Te esperamos!
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 place-content-center w-full">
              {brands.map((brand) => (
                <div
                  key={brand.name}
                  className="bg-gray-300 w-auto md:w-auto rounded-md flex flex-col items-center shadow-md overflow-hidden transform transition-transform hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-auto h-32 mx-auto mt-4"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-black mb-2">
                      {brand.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*Seccion de categorias */}
          <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 text-center">
              Categorías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="w-96 flex flex-col items-center bg-gradient-to-b from-neutral-950 to-red-800 rounded-lg overflow-hidden shadow-md shadow-neutral-600 group/card">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-max h-72 object-cover transform transition-transform group-hover/card:scale-110"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200">{category.description}</p>
                    <div className="mt-4">
                      <button className="bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-md group-hover/card:bg-neutral-900">
                        Ver Productos
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sección destacada */}
          <div className="mt-16 mb-[48rem] md:mb-96 lg:mb-72">
            <h2 className="text-2xl md:text-4xl font-light text-center py-4 text-white mb-4">
              ¡Lo mejor en tendencias!
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-content-center place-items-center w-full">
              {latestProducts.map((product, index) => (
                <div
                  key={index}
                  className="w-96 md:w-80 lg:w-96 bg-neutral-700 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:bg-neutral-800 hover:contrast-125">
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
      <Footer />
    </div>
  );
};
