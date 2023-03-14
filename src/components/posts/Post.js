import Image from "next/image";
import Author from "../Author";
import { recoleta } from "../layout/Layout";
import MiniButton from "../ui/MiniButton";
import style from "./Post.module.css";
function Post(props) {
   return (
      <div className={style.wraper}>
         <div className={style.photo}>
            <Image className={style.image} src={props.photo} alt="post photo" fill />
         </div>
         <div className={style.content}>
            <div className={style.mini_button}>
               <MiniButton link={"/"} title="Porady" bg="#8AA7E4" />
            </div>
            <div className={`${style.title} ${recoleta.className}`}>{props.title}</div>
            <p className={style.text}>{props.text}</p>
            <Author color="#515151" />
         </div>
      </div>
   );
}
export default Post;
