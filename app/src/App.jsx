import Carousel from "./components/Carousel";
import WelcomeModal from "./components/WelcomeModal";
import img1 from "./assets/nos/img1.jpeg";
import img2 from "./assets/nos/img2.jpeg";
import img3 from "./assets/nos/img3.jpeg";
import img4 from "./assets/nos/img4.jpeg";
import img5 from "./assets/nos/img5.jpeg";
import img6 from "./assets/nos/img6.jpeg";
import img7 from "./assets/nos/img7.jpeg";
import img8 from "./assets/nos/img8.jpeg";
import img9 from "./assets/nos/img9.jpeg";
import { useEffect, useState } from "react";

function App() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  const [elapsed, setElapsed] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const start = new Date("2025-04-09T12:30:00");
    const tick = () => {
      const now = new Date();
      const diff = now - start;

      const totalSeconds = Math.floor(diff / 1000);
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const daysTotal = Math.floor(totalSeconds / 86400);
      const months = Math.floor(daysTotal / 30);
      const days = daysTotal % 30;
      const seconds = totalSeconds % 60;

      setElapsed({ months, days, hours, minutes, seconds });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center p-4 gap-6">
      <WelcomeModal />

      <p className="text-lg font-semibold mt-4 text-center">
        meu amor, você é minha pessoa favorita no mundo todo ❤️
      </p>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md min-w-[280px] rounded-2xl overflow-hidden shadow-lg flex flex-col my-4">
        <div className="aspect-[4/5] w-full">
          <Carousel images={images} />
        </div>
      </div>

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md px-2">
        <p className="text-center text-sm sm:text-base md:text-lg leading-snug break-words">
          eu te amo há{" "}
          <span className="font-bold text-pink-300">{elapsed.months}</span>{" "}
          meses,{" "}
          <span className="font-bold text-pink-300">{elapsed.days}</span> dias,{" "}
          <span className="font-bold text-pink-300">{elapsed.hours}</span> horas,{" "}
          <span className="font-bold text-pink-300">{elapsed.minutes}</span>{" "}
          minutos e{" "}
          <span className="font-bold text-pink-300">{elapsed.seconds}</span>{" "}
          segundos. 🩷
        </p>
      </div>
    </div>
  );
}

export default App;
