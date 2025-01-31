import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import styles from "./Slider.module.css";
import Button from "../Button/Button";

const SliderContext = createContext();

function SliderProvider({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Img1, Img2, Img3];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <SliderContext.Provider
      value={{ currentSlide, nextSlide, prevSlide, slides }}
    >
      {children}
    </SliderContext.Provider>
  );
}

SliderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function Slider() {
  const { currentSlide, nextSlide, prevSlide, slides } =
    useContext(SliderContext);

  return (
    <div className={styles.slider}>
      <h2>Работы</h2>
      <div className={styles.slider_img}>
        <Button className="button_slider" onClick={prevSlide} label="&#8592;" />
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <Button className="button_slider" onClick={nextSlide} label="&#8594;" />
      </div>
    </div>
  );
}

export default function SliderApp() {
  return (
    <SliderProvider>
      <Slider />
    </SliderProvider>
  );
}
