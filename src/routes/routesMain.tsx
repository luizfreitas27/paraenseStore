import { Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/Home";
import { ProductsPage } from "@/pages/Products";
import { AboutPage } from "@/pages/About";
import { ContactPage } from "@/pages/Contact";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/produtos" element={<ProductsPage />} />
      <Route path="/sobrenos" element={<AboutPage />} />
      <Route path="/contato" element={<ContactPage />} />
    </Routes>
  );
};
