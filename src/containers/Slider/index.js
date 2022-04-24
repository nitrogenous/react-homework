import { CarouselSlider } from "../../components/CarouselSlider";
import "./index.scss";

export const Slider = () => {
  return (
    <div className="slider-wrapper">
      <CarouselSlider
        images={[
          "https://picsum.photos/seed/555/800/600",
          "https://picsum.photos/seed/333/800/600",
          "https://picsum.photos/seed/666/800/600",
        ]}
      />
    </div>
  );
};
