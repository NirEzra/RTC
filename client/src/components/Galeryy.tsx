import { useEffect, useState } from "react";
import ImageCarousel, { ImageType } from "./image-carusel";
import "../style/Galeryy.css";

export default function Galeryy() {
  const [images, setImages] = useState<ImageType[]>();

  useEffect(() => {
    setImages(
      Array.from(Array(7).keys()).map((id) => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`
        // url: `gs://ecommerceshop-2d13b.appspot.com`
      }))
    );
  }, []);

  return (
    <div className="caruselMain">
      <ImageCarousel images={images} />
    </div>
  );
}
