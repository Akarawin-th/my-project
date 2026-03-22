import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";
import img1 from "../assets/kapao.jpg";
import img2 from "../assets/rongtao.jpg";
import img3 from "../assets/shot.jpg";
import img4 from "../assets/ของเล่น.jpg";
import img5 from "../assets/ไฟฟ้า.png";
import img6 from "../assets/download.jpg";
import { Link } from "react-router-dom";

function Home() {
  const slides = [img1, img2, img3];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="home">
      <Navbar />

      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              ✕
            </button>
            <img src={img1} alt="Promotion" className="popup-image" />
          </div>
        </div>
      )}

      <div className="slideshow-container">
        <img
          src={slides[currentSlide]}
          alt="slide"
          className="slide-image"
        />

        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>

        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

<div className="details-section">
  <h2>สินค้าแนะนำ</h2>

  <div className="product-pictures">
    <Link to="/products/toy" className="product-card">
      <img src={img4} alt="ของเล่น" className="product-image" />
      <p className="product-name">ของเล่น</p>
    </Link>

    <Link to="/products/electric" className="product-card">
      <img src={img5} alt="ไฟฟ้า" className="product-image" />
      <p className="product-name">ไฟฟ้า</p>
    </Link>

    <Link to="/products/fashion" className="product-card">
      <img src={img6} alt="แฟชั่น" className="product-image" />
      <p className="product-name">แฟชั่น</p>
    </Link>
  </div>
</div>
</div>
  );
}

export default Home;