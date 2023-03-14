import Image from "next/image";
import style from "./Author.module.css";
import author from "./../assets/images/author.png";

function Author(props) {
   return (
      <div className={style.wraper} style={{ color: props.color }}>
         <div className={style.photo}>
            <Image src={author} alt="author" fill />
         </div>
         <div className={style.name}>Grzegorz Kowalski</div>

         <div className={style.dot}>&#8231;</div>
         <div className={style.date}>20 stycznia 2023</div>
      </div>
   );
}
export default Author;
