import CardLayout from "../CardLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import { IImg } from "../../../types/interface";
import type { ICarouselProps } from "../../../types/interface";

const CarouselPage = ({ img } : ICarouselProps) => {
  return (
    <CardLayout>
      <Carousel showThumbs={false}>
        {img.map((el : IImg)=>
          <Image key={el.id} src={el.url} width={400} height={525} alt={`${el.id}`} priority={true} placeholder="blur" blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="  />
        )}
      </Carousel>

    </CardLayout>
  )
}

export default CarouselPage