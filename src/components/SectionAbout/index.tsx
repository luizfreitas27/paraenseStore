import img from "@/assets/agulhas_croche.jpg";
export const SectionAbout = () => {
  return (
    <>
      <section className="bg-[rgba(12,57,109,0.9)]  w-full max-w-full py-11">
        <div className="container mx-auto px-8 flex justify-center gap-12">
          <div className="flex flex-col gap-4 ">
            <h1 className="text-2xl text-primaryOrange">
              CONHEÇA NOSSO ARMARINHO
            </h1>

            <div className="text-justify text-white flex flex-col gap-4 max-w-[500px] w-full">
              <p>
                Bem-vindo a Armarinho Paraense, referência no varejo de tecidos
                e acessórios para moda. Nossa fábrica possui uma estrutura
                moderna e altamente equipada para atender às demandas do setor.
              </p>
              <p>
                Com instalações que refletem nossa busca pela excelência,
                investimos em equipamentos para garantir precisão e eficiência
                em cada etapa do processo de produção. Desde botões e argolas
                até fechos e pingentes, cada acessório é criado em um ambiente
                que combina inovação e tradição, resultando em produtos de alta
                qualidade e designs exclusivos.
              </p>
            </div>
          </div>

          <div className="hidden sm:block w-full sm:max-w-[300px] sm:max-h-[300px] sm:border-4 sm:border-primaryOrange sm:p-1 sm:rounded-2xl overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={img}
              alt="Imagem agulhas"
            />
          </div>
        </div>
      </section>
    </>
  );
};
