import Carousel from "./components/carousel";
import img1 from "./assets/nos/img1.jpeg";
import img2 from "./assets/nos/img2.jpeg";
import img3 from "./assets/nos/img3.jpeg";
import img4 from "./assets/nos/img4.jpeg";
import img5 from "./assets/nos/img5.jpeg";
import img6 from "./assets/nos/img6.jpeg";
import img7 from "./assets/nos/img7.jpeg";
import img8 from "./assets/nos/img8.jpeg";
import img9 from "./assets/nos/img9.jpeg";


function App() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
  ];


  return (
    <>
      
      <Carousel images={images} />

    </>
  )
}

export default App;


