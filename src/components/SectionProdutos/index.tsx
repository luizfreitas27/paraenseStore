import { CardProduct } from "../CardProduct";
import img1 from "@/assets/meia-argola.webp";

export const SectionProdutos = () => {
  return (
    <>
      <section className="bg-[#545454]  bg-opacity-5 w-full  flex justify-center items-center py-16">
        <div
          className="container mx-auto grid gap-6 p-4 
          grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
          <CardProduct productName="Botoes" img={img1} />
        </div>
      </section>
    </>
  );
};
