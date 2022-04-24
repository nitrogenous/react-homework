import { useEffect, useState } from "react";
import "./index.scss";

export const CarouselSlider = ({ images }) => {
  const [currentImageKey, setCurrentImageKey] = useState(0);

  useEffect(() => {
    const autoSlideIntervar = setInterval(() => {
      const nextImageKey =
        currentImageKey + 1 >= images.length ? 0 : currentImageKey + 1;

      setCurrentImageKey(nextImageKey);
    }, 5000);

    return () => {
      clearInterval(autoSlideIntervar);
    };
  }, [currentImageKey, images]);

  const previousImage = () => {
    setCurrentImageKey(
      currentImageKey - 1 < 0 ? images.length - 1 : currentImageKey - 1
    );
  };

  const nextImage = () => {
    setCurrentImageKey(
      currentImageKey + 1 >= images.length ? 0 : currentImageKey + 1
    );
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-images">
        {images.length &&
          images.map((image, key) => (
            <img
              src={image}
              id={key}
              key={key}
              alt={`carousel-item-${key}`}
              hidden={currentImageKey !== key}
            />
          ))}
      </div>
      <div className="carousel-controllers">
        <button onClick={previousImage}>Prev</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};
