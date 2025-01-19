type CardProductProps = {
  productName: string;
  img: string;
};

export const CardProduct = ({ productName, img }: CardProductProps) => {
  return (
    <div
      className="max-w-[150px] sm:max-w-[150px] md:max-w-[180px] w-full max-h-[200px] sm:max-h-[150px] md:max-h-[180px] h-full mx-auto"
      aria-label={`Cartão de produto para ${productName}`}
    >
      <div className="w-full aspect-square p-1 border-4 border-transparent hover:border-primaryOrange transition-all rounded-full">
        <img
          className="w-full h-full object-cover rounded-full"
          src={img}
          alt={`${productName} imagem.`}
          title={productName}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/path/to/placeholder.jpg"; // caminho da imagem de placeholder
          }}
        />
      </div>
      <h1 className="text-center text-sm sm:text-xs md:text-sm">
        {productName}
      </h1>
    </div>
  );
};
