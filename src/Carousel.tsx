import CardLayout from "./components/CardLayout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const CarouselPage = ({ img }: any) => {
  return (
    <CardLayout>
      <Carousel>
        {img.map((el : any)=>
        <div key={el.id}>
          <Image src={el.url} width={400} height={525} alt={el.id}/>
        </div>
        )}
      </Carousel>

    </CardLayout>
  )
}

export default CarouselPage