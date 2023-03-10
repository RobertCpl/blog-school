import style from "./Navigation.module.css";
import Image from "next/image";
import Button from "./../ui/Button";
import logo from "@/assets/images/logo.svg";
import arrow from "@/assets/images/recruitmenArrow.svg";
function Navigation() {
   return (
      <div className={style.wraper}>
         <div className={style.left}>
            <div className={style.logo}>
               <Image src={logo} alt="logo cloud image" />
            </div>
            <ul className={style.menu}>
               <li>O nas</li>
               <li>Edukacja domowa</li>
               <li>Przestrzeń rodzica</li>
               <li>Inne projekty</li>
               <li>Blog</li>
               <li>Kontakt</li>
               <li>Kariera</li>
               <li>
                  Rekrutujemy
                  <Image src={arrow} alt="recuitment link" className={style.arrow} />
               </li>
            </ul>
         </div>
         <div className={style.right}>
            <Button link="/" title={"Chmurkopedia"} bg={"#113F82"} />
            <Button link="/" title={"Zapisz się"} bg={"#F4AE45"} />
            <Button link="/" title={"Zaloguj"} bg={"#8AA7E4"} />
         </div>
      </div>
   );
}
export default Navigation;
