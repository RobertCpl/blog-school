import style from "./Header.module.css";
import Image from "next/image";
import magnifier_icon from "./../../assets/images/magnifier.svg";
import category_icon from "./../../assets/images/category_icon.svg";
import { recoleta } from "./Layout";

function Header() {
   return (
      <div className={style.wraper}>
         <div className={style.content}>
            <div className={style.top_bar}>
               <h1 className={`${style.title} ${recoleta.className}`}>Blog edukacyjny Szkoły w Chmurze</h1>
               <div className={style.category_box}>
                  <div className={style.search}>
                     <input type="text" placeholder="Szukaj" />
                     <div className={style.search_icon}>
                        <Image src={magnifier_icon} />
                     </div>
                  </div>
                  <div className={style.category}>
                     <p className={style.category_text}>Wybierz kategorie</p>
                     <div className={style.category_icon}>
                        <Image src={category_icon} />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Header;
