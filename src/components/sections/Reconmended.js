import { recoleta } from "../layout/Layout";
import style from "./Recomended.module.css";
import decor from "./../../assets/images/decor.svg";
import Image from "next/image";
import PostList from "./../posts/PostList";
function Recomended(props) {
   return (
      <div className={style.wraper}>
         <div className={style.content}>
            <div className={`${style.title} ${recoleta.className}`}>
               Polecane
               <div className={style.decor}>
                  <Image src={decor} alt="decor" fill />
               </div>
            </div>
            <PostList posts={props.posts} />
         </div>
      </div>
   );
}
export default Recomended;
