import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import ProductList from "../pages/products/ProductList";
import CreateProduct from "../pages/products/CreateProduct";
import EditProduct from "../pages/products/EditProduct";
import EventList from "../pages/events/EventList";
import CreateEvent from "../pages/events/CreateEvent";
import EditEvent from "../pages/events/EditEvent";
import CultureList from "../pages/cultures/CultureList";
import CreateCulture from "../pages/cultures/CreateCulture";
import EditCulture from "../pages/cultures/EditCulture";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/create"
          element={
            <ProtectedRoute>
              <CreateProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events"
          element={
            <ProtectedRoute>
              <EventList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/create"
          element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/:id"
          element={
            <ProtectedRoute>
              <EditEvent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cultures"
          element={
            <ProtectedRoute>
              <CultureList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cultures/create"
          element={
            <ProtectedRoute>
              <CreateCulture />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cultures/:id"
          element={
            <ProtectedRoute>
              <EditCulture />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
