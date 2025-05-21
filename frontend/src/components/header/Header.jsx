import { useState } from "react";
import styles from "./header.module.css";
import img1 from "../../assets/headerslider/01.jpg";
import img2 from "../../assets/headerslider/02.jpg";
import img3 from "../../assets/headerslider/03.jpg";
import img4 from "../../assets/headerslider/04.jpg";

const images = [img1, img2, img3, img4];

export default function Header() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.sliderWrapper}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={styles.sliderImage}
          style={{
            opacity: index === current ? 1 : 0,
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      ))}

      <button className={styles.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={styles.next} onClick={nextSlide}>
        &#10095;
      </button>

      <div className={styles.textOverlay}>
        <h1 className={styles.title}>Gowala Farms</h1>
        <p className={styles.subtitle}>The Complete Milk</p>
        <button className={styles.readMore}>Read More</button>
      </div>
    </div>
  );
}
