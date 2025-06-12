import ProductBuilder from "./pages/product-builder";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/Main";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ProductBuilder />} />
      </Route>
    </Routes>
  );
}
