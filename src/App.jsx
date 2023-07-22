import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { NotFound } from "./Pages/NotFound/NotFound";

export const App = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route exact path="/" element={<Home />} />

        {/* Ruta para la lista de productos */}
        {/* <Route path="/products">
          <ProductList />
        </Route> */}

        {/* Ruta para ver el detalle de un producto específico */}
        {/* <Route path="/product/:id">
          <ProductDetail />
        </Route> */}

        {/* Ruta para agregar un nuevo producto */}
        {/* <Route path="/add-product">
          <ProductForm />
        </Route> */}

        {/* Ruta para cualquier otra página */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
