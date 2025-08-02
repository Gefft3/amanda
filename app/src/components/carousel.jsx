import { useEffect, useRef, useState } from "react";

export default function Carousel({ images, interval = 3000 }) {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const scroll = () => {
      if (!containerRef.current) return;
      const next = (index + 1) % images.length;
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollTo({ left: width * next, behavior: "smooth" });
      setIndex(next);
    };

    timeoutRef.current = setInterval(scroll, interval);
    return () => clearInterval(timeoutRef.current);
  }, [index, images.length, interval]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const width = containerRef.current.clientWidth;
    const newIndex = Math.round(scrollLeft / width);
    setIndex(newIndex);
  };

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="w-full overflow-x-scroll scroll-smooth snap-x snap-mandatory flex"
        style={{ WebkitOverflowScrolling: "touch" }}
        onScroll={handleScroll}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="snap-center shrink-0 w-full h-auto object-cover"
            draggable={false}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
