import React, { useState, useEffect } from "react"; 
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { ListingPage } from "./pages/ListingPage/ListingPage";
import { ProductDetailPage } from "./pages/ProductDetailPage/ProductDetailPage";
import { ScrollToTop } from "./components/ScrollToTop";
import Loader from "./components/Loader/Loader"; 

export default function App() {
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);


  if (loading) {
    return <Loader />;
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/collection" element={<ListingPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

function NotFoundPage() {
  return (
    <div className="error-page">
      <div className="error-page__icon">✦</div>
      <h1 className="error-page__title">Page Not Found</h1>
      <p className="error-page__text">
        This lane doesn't exist in our gully. Let us guide you back.
      </p>
      <a href="#/" className="btn btn--primary">
        Return Home
      </a>
    </div>
  );
}