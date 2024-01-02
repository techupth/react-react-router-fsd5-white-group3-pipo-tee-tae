//1.)install npm install react-router-dom ใน terminal

import "./App.css";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=" /HomePage" element={<HomePage />} />
        <Route path=" /ViewProductPage" element={<ViewProductPage />} />
        <Route path=" /CreateProductPage" element={<CreateProductPage />} />
        <Route path=" /EditProductPage" element={<EditProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
