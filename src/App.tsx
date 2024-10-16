// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import DashboardPage from "@/pages/dashboard"
import MainLayout from "@/components/layout/main-layout"
import ProductCRUD from "./pages/product"
import HomePage from "./pages/home"

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/products" element={<ProductCRUD />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
