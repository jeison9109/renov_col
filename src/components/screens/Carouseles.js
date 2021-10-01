import React, { useState } from "react";
import confianza from "../images/confianza.jpg";
import cooperacion from "../images/cooperacion.jpg";
import fraternidad from "../images/fraternidad.jpg";
import libertad from "../images/libertad.jpg";
import igualdad from "../images/igualdad.jpg";
import inclusion from "../images/inclusion.jpg";

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

const items = [
  {
    src: confianza,
    caption: "Confianza",
  },
  {
    src: cooperacion,
    caption: "Cooperacion",
  },
  {
    src: fraternidad,
    caption: "Fraternidad",
  },

  {
    src: libertad,
    caption: "Libertad",
  },
  {
    src: igualdad,
    caption: "Igualdad",
  },

  {
    src: inclusion,
    caption: "Inclusion",
  },
];

const Carouseles = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.caption}
          width="100%"
          height="auto"
          captionHeader={item.caption}
        />
        <CarouselCaption captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
export default Carouseles;
