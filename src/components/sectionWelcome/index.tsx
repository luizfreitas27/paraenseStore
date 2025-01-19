import Img from "@/assets/linhas.jpg";

export const SectionWelcome = () => {
  return (
    <>
      <section className="relative container mx-auto w-full max-w-full min-h-screen max-h-screen flex justify-center items-center bg-[#545454] bg-opacity-5">
        <div className="max-w-full relative w-full">
          <img
            className="w-full max-h-[600px] h-full object-contain"
            src={Img}
            alt="Linhas imagem."
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center font-bold text-white ">
          <h1 className="text-2xl">Bem-Vindo</h1>
          <hr className="w-1/4 my-4 border-t-2 border-gray-300" />
          <h3 className="text-lg">Tecidos e utilitários</h3>
        </div>
      </section>
    </>
  );
};
