import foto1 from "../assets/gato1.jpg";
import foto2 from "../assets/gato2.png";
import foto4 from "../assets/gato3.png";
import foto3 from "../assets/gato4.jpg";
import { Rate } from "./Rate";
import { useState } from "react";

function MainSection() {
  const [images, setImages] = useState([{"src": foto1, "rate":0, id:0},
                  {"src": foto2, "rate":0, id:1},
                  {"src": foto3, "rate":0, id:2},
                  {"src": foto4, "rate":0, id:3}]);

  const editaRate = (id, newRate)=>{

    const newImages = images.map((img,i)=>{
      if (img.id == id)
        return {...img, "rate":newRate};
      else
        return img;
    });

    const saludarImagenes = ()=>{
      images.forEach((img) =>{
        img.ref.current.saludar()
      })
    }

    clickSaludar.current = clickSaludar.current + 1;
    console.log("he saludado" + clickSaludar.current + "veces")
    newImages.sort((a,b)=>{return b.rate-a.rate});

    setImages(newImages);

  }

  return (
    <>
      <div className="mainSection">

        {images.map((img, i) => (
          <div className="scoreCard" key={i}>
            <img  src={img.src} alt="imagen" />
            <Rate editaRate={editaRate} id={img.id} rate={img.rate}></Rate>
          </div>
        ))}

      </div>
    </>
  );
}

export default MainSection;
