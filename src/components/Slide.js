import Image from "next/image";
import style from "./Slide.module.css";
import { recoleta } from "./layout/Layout";
import Author from "./Author";
function Slide(props) {
   console.log(props.photo);
   return (
      <div className={style.wraper}>
         <div className={style.fog}></div>
         <div className={style.content}>
            <Author />
            <h3 className={`${style.title} ${recoleta.className}`}>{props.title}</h3>
            <p className={style.text}>
               Jak zadbać o relacje, żeby edukacja domowa była dobra dla całej rodziny? Na co zwrócić uwagę? 8 ważnych
               elementów budowania relacji rodzice-dziecko.{" "}
            </p>
         </div>
         <div className={style.photo}>
            <Image src={props.photo} alt="photo warsaw" fill className={style.image} />
         </div>
      </div>
   );
}
export default Slide;
