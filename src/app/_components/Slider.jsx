"use client";

import SlideItem from "./SlideItem";
import { useState } from "react";

const slides = [
  {
    id: 0,
    title: "Ne Diyor Thasaq Qocu",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
  },
  {
    id: 1,
    title: "Kanal Yarock",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
  },
  {
    id: 2,
    title: "Rotten Jedie",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/965731/pexels-photo-965731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "/",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  function handleCurrent(id) {
    setCurrent(id);
  }
  return (
    <section className="h-64 overflow-hidden relative">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <SlideItem
            key={slide.id}
            src={slide.img}
            href={slide.url}
            desc={slide.description}
            title={slide.title}
            func={handleCurrent}
          />
        ))}
      </div>
      <div className="absolute bottom-1.5 flex items-center justify-center gap-4 w-full">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleCurrent(slide.id)}
            className="border border-black rounded-full size-4 flex items-center justify-center"
          >
            {current === index && (
              <span className="size-2.5 bg-black rounded-full"></span>
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Slider;
