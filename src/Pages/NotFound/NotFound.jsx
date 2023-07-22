import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="text-6xl font-bold text-primary mb-4">Error 404</div>
      <div className="text-3xl text-darkGray mb-8">Página no encontrada</div>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white rounded-md hover:bg-opacity-80">
        Volver a la página de inicio
      </Link>
      <div className="mt-8">
        <img
          src="LogoDark1.webp" // Ruta a tu logo blanco (reemplaza con tu logo)
          alt="Logo TenisJes"
          className="w-32 h-32"
        />
      </div>
    </div>
  );
};
