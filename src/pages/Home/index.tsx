import { Header } from "@/components/Header";
import { SectionWelcome } from "@/components/sectionWelcome";
import { SectionProdutos } from "@/components/SectionProdutos";
import { listImg } from "@/utils";
import CarroselMarcas from "@/components/CarrosselMarcas";
import { SectionAbout } from "@/components/SectionAbout";
import { SectionBestChoose } from "@/components/SectionBestChoose";
import { SectionContact } from "@/components/SectionContact";
import { SectionLocation } from "@/components/SectionLocation";

export const HomePage = () => {
  return (
    <>
      <Header />
      <SectionWelcome />
      <SectionAbout />
      <SectionProdutos />
      <CarroselMarcas images={listImg} />
      {/* <SectionBestChoose /> */}
      <SectionLocation />
      <SectionContact />
    </>
  );
};
