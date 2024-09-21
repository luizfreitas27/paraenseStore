import { ReactNode } from "react";

interface IHeaderProps {
  children: ReactNode;
}
export const Header = ({ children }: IHeaderProps) => {
  return (
    <>
      <div className="bg-black w-full">{children}</div>
    </>
  );
};
