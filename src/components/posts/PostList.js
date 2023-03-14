import style from "./PostList.module.css";
import arrowLeft from "./../../assets/images/left_arrow.svg";
import arrowRight from "./../../assets/images/right_arrow.svg";
import Image from "next/image";
import Post from "./Post";

function PostList(props) {
   const posts = props.posts.map((post) => {
      return <Post key={post.id} photo={post.feature_media} title={post.title} text={post.content} />;
   });
   return (
      <div className={style.wraper}>
         <div className={style.list}>{posts}</div>
         <div className={style.arrows}>
            <div className={style.left_arrow}>
               <Image src={arrowLeft} alt="left arrow" />
            </div>
            <div className={style.right_arrow}>
               <Image src={arrowRight} alt="right arrow" />
            </div>
         </div>
      </div>
   );
}
export default PostList;
