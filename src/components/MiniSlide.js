import Image from "next/image";
import Author from "./Author";
import { recoleta } from "./layout/Layout";
import style from "./MiniSlide.module.css";

function MiniSlide(props) {
   return (
      <div className={style.wraper}>
         <div className={style.photo}>
            <Image className={style.image} src={props.photo} alt="post photo" fill />
         </div>
         <div className={style.fog}></div>
         <div className={style.content}>
            <Author />
            <div className={`${style.title} ${recoleta.className}`}>{props.title}</div>
         </div>
      </div>
   );
}
export default MiniSlide;
