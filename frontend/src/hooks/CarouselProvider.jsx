import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  forwardRef,
} from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

// Create a context
const CarouselContext = createContext();
// Create a provider component
const CarouselProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = React.Children.count(children);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % count);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  };

  return (
    <CarouselContext.Provider
      value={{ currentIndex, nextSlide, prevSlide, count }}
    >
      {children}
    </CarouselContext.Provider>
  );
};

// Hook to use Carousel Context
const useCarousel = () => useContext(CarouselContext);

export default CarouselProvider;

export const CarouselItems = forwardRef(({ children, className, id }, ref) => {
  const { currentIndex, count } = useCarousel();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % count);
    }, 8000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className={twMerge("relative h-full", className)} id={id} ref={ref}>
      {React.Children.map(children, (child, index) => (
        <div
          className={`CarouselItems ${
            index === currentIndex ? "block" : "hidden"
          }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
});
CarouselItems.displayName = "CarouselItems";

export const CarouselPrev = () => {
  const { prevSlide } = useCarousel();
  return (
    <aside className="absolute top-[50%] z-20 select-none pl-3">
      <span
        className="material-symbols-outlined cursor-pointer rounded-[50%] border-2"
        onClick={prevSlide}
      >
        chevron_left
      </span>
    </aside>
  );
};

export const CarouselNext = () => {
  const { nextSlide } = useCarousel();
  return (
    <aside className="absolute right-0 top-[50%] z-20 select-none pr-3">
      <span
        className="material-symbols-outlined cursor-pointer rounded-[50%] border-2"
        onClick={nextSlide}
      >
        chevron_right
      </span>
    </aside>
  );
};

import CarouselProvider from "./CarouselContext";

const Apps = () => {
  const data = [
    { heading: "Slide 1", text: "Text 1", img: "/img1.jpg" },
    { heading: "Slide 2", text: "Text 2", img: "/img2.jpg" },
    { heading: "Slide 3", text: "Text 3", img: "/img3.jpg" },
  ];

  return (
    <CarouselProvider>
      <Wrapper height="600px">
        <CarouselItems className="CarouselItems">
          {data.map((item, index) => (
            <div key={index}>
              <CarouselTxtBar
                height="300px"
                weight="500px"
                className="top-[30%] z-10 bg-transparent p-10 md:left-[10%]"
              >
                <h1 className="pb-1 font-bold">{item.heading}</h1>
                <p>{item.text}</p>
                <div className="font-semi-bold flex gap-3 text-xl">
                  <Button className="btn-Primary">
                    <span>SignUp</span>
                  </Button>
                  <Button className="btn-Secondary">
                    <span>Login</span>
                  </Button>
                </div>
              </CarouselTxtBar>
              <CarouselBgImg url={item.img} />
            </div>
          ))}
        </CarouselItems>
        <CarouselDot count={data.length} />
        <CarouselPrev />
        <CarouselNext />
      </Wrapper>
    </CarouselProvider>
  );
};
