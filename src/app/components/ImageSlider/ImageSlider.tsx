import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }: {slides: string[]}) => {
  return (
    <Carousel infiniteLoop>
      {slides.map((slide: string, index: number) => {
        return <Image key={index} src={slide} height="auto" width="800px" />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
