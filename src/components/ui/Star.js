import style from "./Star.module.css";
import star from "../../assets/images/starCloud.svg";
import Image from "next/image";
function Star(props) {
   return (
      <div className={style.star}>
         <Image
            src={star}
            alt="cloud star"
            priority
            fill
            sizes="(max-width: 1440px) 400px, (max-width: 1024px) 300px, (max-width: 768px) 0px"
         />
      </div>
   );
}
export default Star;
