// src/App.jsx
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import ErrorBoundary from "./components/ErrorBoundary";
import HomeScreen from "./pages/HomeScreen";
import ProfileScreen from "./pages/ProfileScreen";
import ShopScreen from "./pages/ShopScreen";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-light bg-light px-3">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        <NavLink to="/shop" className="nav-link">Shop</NavLink>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <ErrorBoundary>
                <HomeScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/profile"
            element={
              <ErrorBoundary>
                <ProfileScreen />
              </ErrorBoundary>
            }
          />
          <Route
            path="/shop"
            element={
              <ErrorBoundary>
                <ShopScreen />
              </ErrorBoundary>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
