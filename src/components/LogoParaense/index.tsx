import Logo from "@/assets/paraense-logo.png";
import { Link } from "react-router-dom";
type Props = {
  path?: string;
  altText?: string;
};

export const LogoParaense = ({
  path = "/",
  altText = "Logo Paraense",
}: Props) => {
  return (
    <div className="w-full h-full max-h-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px]">
      <img
        src={Logo}
        alt={altText}
        className="w-full h-full max-h-full object-cover"
      />
      <Link to={path} />
    </div>
  );
};
