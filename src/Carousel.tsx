import CardLayout from "./components/CardLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { IImg } from "../types/interface";

interface ICarouselProps {
  img : IImg[]
}

const CarouselPage = ({ img } : ICarouselProps) => {
  return (
    <CardLayout>
      <Carousel showThumbs={false}>
        {img.map((el : IImg)=>
          <Image key={el.id} src={el.url} width={400} height={525} alt={`${el.id}`} />
        )}
      </Carousel>

    </CardLayout>
  )
}

export default CarouselPage