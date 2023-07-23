import React, { useContext, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { ProductContext } from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import numeral from "numeral";
import "numeral/locales/es"; // Importar el idioma español para todos los países
import { Eye } from "lucide-react";

// Configurar el idioma de numeral para español
numeral.locale("es");

const Category = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();

  // Estado para los filtros
  const [filterBrand, setFilterBrand] = useState("");
  const [filterPrice, setFilterPrice] = useState([0, 5000000]); // Usaremos un array para el rango de precio
  const [filterName, setFilterName] = useState("");

  // Filtramos los productos según la categoría seleccionada (case-insensitive)
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  // Filtrar productos por marca
  const handleBrandFilter = (e) => {
    setFilterBrand(e.target.value);
  };

  // Filtrar productos por precio (usamos el array para el rango)
  const handlePriceFilter = (value) => {
    // Multiplicar los valores por 1000 para representar en pesos colombianos
    setFilterPrice([value[0] * 1000, value[1] * 1000]);
  };

  // Filtrar productos por nombre
  const handleNameFilter = (e) => {
    setFilterName(e.target.value);
  };

  // Aplicar los filtros
  const filteredProducts = categoryProducts.filter((product) => {
    const brandMatch =
      filterBrand === "" ||
      product.brand.toLowerCase().includes(filterBrand.toLowerCase());
    const priceMatch =
      product.price >= filterPrice[0] && product.price <= filterPrice[1];
    const nameMatch =
      filterName === "" ||
      product.name.toLowerCase().includes(filterName.toLowerCase());
    return brandMatch && priceMatch && nameMatch;
  });

  return (
    <div className="relative">
      <Navbar />
      <div className="bg-neutral-900">
        <div className="container mx-auto py-5 md:py-16 px-2 md:px-0 flex flex-col md:flex-row xl:gap-x-4 h-full">
          {/* Filtros en la barra lateral */}
          <div className="w-full md:w-[20%] pb-10 md:pr-4 mb-4 md:mb-96">
            <div className="bg-neutral-800 text-white px-4 py-10 rounded-md">
              <h3 className="text-xl font-semibold mb-4">Filtrar por:</h3>
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-white">Marca:</label>
                  <input
                    type="text"
                    placeholder="Marca"
                    value={filterBrand}
                    onChange={handleBrandFilter}
                    className="bg-transparent text-white px-4 py-2 rounded-md focus:outline-none border-b"
                  />
                </div>
                {/* Filtrador de rango de precio */}
                <div className="flex flex-col gap-2">
                  <label className="text-white">Precio:</label>
                  <div className="flex items-center gap-4">
                    <span>{numeral(filterPrice[0]).format("$0,0")}</span>
                    <span className="text-white">-</span>
                    <span>{numeral(filterPrice[1]).format("$0,0")}</span>
                  </div>
                  <Slider
                    className="w-full px-2"
                    range
                    value={[filterPrice[0] / 1000, filterPrice[1] / 1000]} // Dividir los valores por 1000 para mostrar en el Slider
                    onChange={handlePriceFilter}
                    min={0}
                    max={5000} // Cambiar el valor máximo a 10000 para representar el rango de 0 a 10.000
                    allowCross={false} // Asegura que los cursores no se crucen
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Lista de productos */}
          <div className="w-full h-full md:w-3/4 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-5 place-content-center place-items-center mb-[46rem] md:mb-[22.6rem]">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="w-72 md:w-80 lg:w-80 bg-neutral-700 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <div className="card-img w-auto flex justify-center items-center py-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="object-cover w-60 h-60"
                  />
                </div>
                <div className="px-4 py-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 text-center">
                    {product.name}
                  </h3>
                  <p className="text-gray-300">{product.brand}</p>
                  <hr className="my-3" />
                  <div className="flex justify-between items-center text-gray-200">
                    <div className="card-price">
                      ${numeral(product.price).format("0,0")}
                    </div>
                    <div className="py-1 w-16 flex items-center justify-center border rounded-md hover:bg-black">
                      <Eye />
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
      <Footer />
    </div>
  );
};

export default Category;
