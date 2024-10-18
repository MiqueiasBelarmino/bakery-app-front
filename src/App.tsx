// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DashboardPage from "@/pages/dashboard"
import MainLayout from "@/components/layout/main-layout"
import ProductPage from "./pages/product"
import HomePage from "./pages/home"
import OrderPage from "./pages/order"

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
