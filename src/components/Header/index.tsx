import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom"; // Não esqueça de importar o Link
import { AlignJustify } from "lucide-react";
import { LogoParaense } from "@/components/LogoParaense";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  return (
    <header className="bg-primaryBlue w-full max-h-[12rem] h-full">
      <div className="container mx-auto w-full h-full px-6 flex justify-between items-center">
        <LogoParaense />
        <div className="">
          <ul className="hidden lg:flex gap-10 text-white">
            <li className="text-2xl text-primaryOrange font-semibold relative">
              <Link
                to="/"
                className="inline-block relative before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-primaryOrange before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
              >
                Home
              </Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className="text-2xl text-white hover:text-white inline-flex items-center relative before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-primaryOrange before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
                      style={{
                        backgroundColor: "var(--primaryBlue)",
                        transition: "none",
                      }}
                    >
                      <span>Produtos</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white p-4 shadow-lg rounded-md w-72 lg:w-[28rem]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {/* Coluna 1 */}
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            Categorias
                          </h3>
                          <ul className="mt-2 space-y-2 text-gray-600">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/produtos/categoria1"
                                  className="hover:text-primaryBlue flex items-center space-x-2"
                                >
                                  <span>🍎</span> {/* Ícone ou emoji */}
                                  <span>Frutas</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/produtos/categoria2"
                                  className="hover:text-primaryBlue flex items-center space-x-2"
                                >
                                  <span>🥦</span>
                                  <span>Legumes</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/produtos/categoria3"
                                  className="hover:text-primaryBlue flex items-center space-x-2"
                                >
                                  <span>🍞</span>
                                  <span>Padaria</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                        {/* Coluna 2 */}
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            Mais Produtos
                          </h3>
                          <ul className="mt-2 space-y-2 text-gray-600">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/produtos/ofertas"
                                  className="hover:text-primaryBlue flex items-center space-x-2"
                                >
                                  <span>🔥</span>
                                  <span>Ofertas Especiais</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/produtos/novidades"
                                  className="hover:text-primaryBlue flex items-center space-x-2"
                                >
                                  <span>✨</span>
                                  <span>Novidades</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/produtos/destaques"
                                  className="hover:text-primaryBlue flex items-center space-x-2"
                                >
                                  <span>⭐</span>
                                  <span>Mais Vendidos</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>

            <li className="text-2xl text-white font-normal relative">
              <Link
                className="inline-block relative before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-primaryOrange before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
                to={"/sobrenos"}
              >
                Sobre Nós
              </Link>
            </li>
            <li className="text-2xl text-white font-normal relative">
              <Link
                className="inline-block relative before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-primaryOrange before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
                to={"/contact"}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex lg:hidden">
          <Sheet>
            <SheetTrigger>
              <AlignJustify color="white" />
            </SheetTrigger>
            <SheetContent className="bg-primaryBlue border-0 flex flex-col justify-start items-center">
              <SheetHeader>
                <SheetTitle className="flex justify-center items-center">
                  <LogoParaense />
                </SheetTitle>
                <SheetDescription>
                  <div className="w-full h-full flex justify-between flex-col">
                    <ul className="flex flex-col  gap-10">
                      <li className="text-2xl text-primaryOrange font-semibold relative">
                        <Link
                          to="/"
                          className="inline-block relative before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-primaryOrange before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="text-2xl text-white font-light relative">
                        <Link
                          className="inline-block relative before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-primaryOrange before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
                          to={"/produtos"}
                        >
                          Produtos
                        </Link>
                      </li>
                      <li className="text-2xl text-white font-light relative">
                        <Link
                          className="inline-block relative before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-primaryOrange before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
                          to={"/sobrenos"}
                        >
                          Sobre Nós
                        </Link>
                      </li>
                      <li className="text-2xl text-white font-light relative">
                        <Link
                          className="inline-block relative before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-[2px] before:bg-primaryOrange before:transition-all before:duration-500 before:ease-in-out hover:before:w-full hover:before:left-0"
                          to={"/contact"}
                        >
                          Contato
                        </Link>
                      </li>
                    </ul>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="w-full h-[0.3rem] bg-gradient-loop"></div>
    </header>
  );
};
