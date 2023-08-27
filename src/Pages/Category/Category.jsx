import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ProductContext } from "../../Context/ProductContext";
import { useParams } from "react-router-dom";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import numeral from "numeral";
import "numeral/locales/es"; // Importar el idioma español para todos los países
import { ArrowUp, Eye } from "lucide-react";
import { SocialNetworks } from "../../Components/SocialNetworks/SocialNetworks";

// Configurar el idioma de numeral para español
numeral.locale("es");

const Category = () => {
  const { products } = useContext(ProductContext);
  const { category } = useParams();

  // Estado para los filtros
  const [filterBrands, setFilterBrands] = useState([]); // Usamos un array para las marcas seleccionadas
  const [filterPrice, setFilterPrice] = useState([0, 5000000]); // Usaremos un array para el rango de precio
  const [filterName, setFilterName] = useState("");

  // Filtramos los productos según la categoría seleccionada (case-insensitive)
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  // Limpiar los filtros al cambiar de categoría
  // Scroll a la parte superior cuando cambie la categoría
  useEffect(() => {
    // Mover la ventana hasta la parte superior de la página
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Limpiar los filtros al cambiar de categoría
    setFilterBrands([]);
    setFilterPrice([0, 5000000]);
    setFilterName("");
  }, [category]); // Se ejecutará cada vez que cambie 'category'

  // Lista de marcas únicas
  const uniqueBrands = [
    ...new Set(categoryProducts.map((product) => product.brand)),
  ];

  // Filtrar productos por marca
  const handleBrandFilter = (brand) => {
    if (filterBrands.includes(brand)) {
      setFilterBrands(filterBrands.filter((item) => item !== brand));
    } else {
      setFilterBrands([...filterBrands, brand]);
    }
    console.log(filterBrands); // Agrega este console.log para verificar el estado
  };

  // Filtrar productos por marca
  // const handleBrandFilter = (e) => {
  //   setFilterBrand(e.target.value);
  // };

  // Filtrar productos por precio (usamos el array para el rango)

  const handlePriceFilter = (values) => {
    setFilterPrice([values[0], values[1]]);
  };
  // Filtrar productos por nombre
  const handleNameFilter = (e) => {
    setFilterName(e.target.value);
  };

  const handleMinPriceChange = (event) => {
    const newMinPrice = parseInt(event.target.value.replace(/\D/g, ""));
    setFilterPrice([newMinPrice, filterPrice[1]]);
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = parseInt(event.target.value.replace(/\D/g, ""));
    setFilterPrice([filterPrice[0], newMaxPrice]);
  };

  // Aplicar los filtros
  const filteredProducts = categoryProducts.filter((product) => {
    const brandMatch =
      filterBrands.length === 0 || filterBrands.includes(product.brand);
    const priceMatch =
      product.price >= filterPrice[0] && product.price <= filterPrice[1];
    const nameMatch =
      filterName === "" ||
      product.name.toLowerCase().includes(filterName.toLowerCase());
    return brandMatch && priceMatch && nameMatch;
  });

  // Aplicar los filtros y ordenar productos por precio mayor
  const sortedAndFilteredProducts = filteredProducts
    .slice() // Crear una copia para no modificar el arreglo original
    .sort((a, b) => b.price - a.price); // Ordenar por precio mayor a menor

  return (
    <div className="relative">
      <Navbar />
      <div className="bg-neutral-900 min-h-screen">
        <div className="container mx-auto py-5 md:py-16 px-2 md:px-0 flex flex-col md:flex-row xl:gap-x-4 h-full">
          {/* Filtros en la barra lateral */}
          <div className="w-full md:w-[20%] pb-10 md:pr-4 mb-4 md:mb-96">
            <div className="bg-neutral-800 text-white px-4 py-10 rounded-md">
              <form className="flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-5">
                  <label className="text-white text-2xl">Marca:</label>
                  <div className="grid gap-y-2 grid-cols-2 md:grid-cols-1 lg:grid-cols-2 max-w-xl">
                    {uniqueBrands.map((brand, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          value={brand}
                          checked={filterBrands.includes(brand)}
                          onChange={() => handleBrandFilter(brand)}
                          className="form-checkbox"
                        />
                        <span className="text-white">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Filtrador de rango de precio */}
                <div className="flex flex-col gap-y-5">
                  <label className="text-white text-2xl">Precio:</label>
                  <div className="flex items-center gap-4">
                    {/* Div para el valor mínimo */}
                    <div className="w-2/5">
                      <label htmlFor="min" className="text-white">
                        MIN
                      </label>
                      <input
                        id="min"
                        type="text"
                        className="w-full py-1 text-gray-200 text-center bg-transparent font-semibold text-lg border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        value={`$ ${filterPrice[0]}`}
                        onChange={handleMinPriceChange}
                      />
                    </div>

                    {/* Separador */}
                    <span className="text-white">-</span>

                    {/* Div para el valor máximo */}
                    <div className="w-2/5">
                      <label htmlFor="max" className="text-white">
                        MAX
                      </label>
                      <input
                        id="max"
                        type="text"
                        className="w-full py-1 text-gray-200 text-center bg-transparent font-semibold text-lg border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        value={`$ ${filterPrice[1]}`}
                        onChange={handleMaxPriceChange}
                      />
                    </div>
                  </div>
                  <Slider
                    className="w-full px-2 "
                    range
                    value={filterPrice}
                    onChange={handlePriceFilter}
                    min={0}
                    max={5000000}
                    allowCross={false}
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Lista de productos */}
          <div className="w-full h-full md:w-3/4 grid-cols-2 grid sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-5 place-content-center place-items-center mb-[46rem] md:mb-[22.6rem]">
            {sortedAndFilteredProducts.map((product, index) => (
              <div
                key={index}
                className="max-w-xl w-full bg-neutral-700 rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
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
                  <div className="flex justify-center items-center text-gray-50">
                    <div className="text-center">
                      ${numeral(product.price).format("0,0")}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SocialNetworks />
      <Footer />
    </div>
  );
};

export default Category;
