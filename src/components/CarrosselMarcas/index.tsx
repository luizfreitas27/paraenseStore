import React from "react";
import "@/styles/carrosselMarcas.css"; // Certifique-se de que o caminho esteja correto

type CarroselMarcasProps = {
  images: string[];
};

const CarroselMarcas: React.FC<CarroselMarcasProps> = ({ images }) => {
  return (
    <div className="carousel-container overflow-hidden">
      <div className="w-full max-w-full flex justify-center items-center">
        <h1 className="font-bold text-primaryBlue text-2xl">
          Marcas Parceiras
        </h1>
      </div>
      <div className="carousel-track">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Carousel item ${index + 1}`}
            className="carousel-image mx-4"
          />
        ))}
        {images.map((img, index) => (
          <img
            key={`duplicate-${index}`}
            src={img}
            alt={`Carousel item ${index + 1}`}
            className="carousel-image mx-4"
          />
        ))}
        {images.map((img, index) => (
          <img
            key={`duplicate-${index}`}
            src={img}
            alt={`Carousel item ${index + 1}`}
            className="carousel-image mx-4"
          />
        ))}
        {images.map((img, index) => (
          <img
            key={`duplicate-${index}`}
            src={img}
            alt={`Carousel item ${index + 1}`}
            className="carousel-image mx-4"
          />
        ))}
        {images.map((img, index) => (
          <img
            key={`duplicate-${index}`}
            src={img}
            alt={`Carousel item ${index + 1}`}
            className="carousel-image mx-4"
          />
        ))}
      </div>
    </div>
  );
};

export default CarroselMarcas;
