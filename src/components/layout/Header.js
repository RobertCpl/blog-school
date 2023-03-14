import style from "./Header.module.css";
import Image from "next/image";
import magnifier_icon from "./../../assets/images/magnifier.svg";
import category_icon from "./../../assets/images/category_icon.svg";
import lefArrow from "./../../assets/images/left_arrow.svg";
import rightArrow from "./../../assets/images/right_arrow.svg";
import { recoleta } from "./Layout";
import Slide from "../Slide";
import MiniSlide from "../MiniSlide";
import Star from "../ui/Star";

function Header({ posts }) {
   console.log(posts);

   const slides = posts.map((post) => (
      <Slide key={post.id} photo={post.feature_media} title={post.title} width="900" height="550" />
   ));

   return (
      <div className={style.wraper}>
         <div className={style.content}>
            <div className={style.top_bar}>
               <h1 className={`${style.title} ${recoleta.className}`}>Blog edukacyjny Szkoły w Chmurze</h1>
               <div className={style.category_box}>
                  <div className={style.search}>
                     <input type="text" placeholder="Szukaj" />
                     <div className={style.search_icon}>
                        <Image src={magnifier_icon} alt="icon" />
                     </div>
                  </div>
                  <div className={style.category}>
                     <p className={style.category_text}>Wybierz kategorie</p>
                     <div className={style.category_icon}>
                        <Image src={category_icon} alt="icon" />
                     </div>
                  </div>
               </div>
            </div>
            <div className={style.new_posts}>
               <div className={style.slider}>
                  {slides}
                  <div className={style.arrow_left}>
                     <Image src={lefArrow} alt="left arrow" />
                  </div>
                  <div className={style.arrow_right}>
                     <Image src={rightArrow} alt="right arrow" />
                  </div>
               </div>
               <div className={style.mini_slides}>
                  <div className={style.mini_slide}>
                     <MiniSlide photo={posts[2].feature_media} title={posts[2].title} />
                  </div>
                  <div className={style.mini_slide}>
                     <MiniSlide photo={posts[2].feature_media} title={posts[2].title} />
                  </div>
               </div>
               <div className={style.star_container}>
                  <Star />
               </div>
            </div>
         </div>
      </div>
   );
}
export default Header;
