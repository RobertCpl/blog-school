import style from "./Footer.module.css";
import logo from "./../../assets/images/logo.svg";
import Image from "next/image";
import Button from "../ui/Button";

function Footer() {
   return (
      <div className={style.wraper}>
         <div className={style.content}>
            <div className={style.logo}>
               <div className={style.photo}>
                  <Image src={logo} fill alt="logo" />
               </div>
               <p className={style.logo_text}>Szkoła w Chmurze</p>
            </div>
            <ul className={style.list}>
               <li className={style.item}>Poznaj Szkołę w Chmurze</li>
               <li className={style.item}>I Liceum w Chmurze w Warszawie</li>
               <li className={style.item}>Turkusowa Wieża w Warszawie</li>
               <li className={style.item}>Zielona Wieża - przedszkole i żłobek</li>
               <li className={style.item}>Program dla szkół tradycyjnych</li>
               <li className={style.item}>Dla mediów</li>
               <li className={style.item}>Kariera</li>
            </ul>
            <ul className={style.list}>
               <li className={style.item}>Edukacja domowa dla Szkoły Podstawowej</li>
               <li className={style.item}>Edukacja domowa dla Liceum</li>
               <li className={style.item}>Przestrzeń rodziców Edukacji Domowej</li>
            </ul>
            <div className={style.login}>
               <div className={style.button}>
                  <p className={style.login_text}>Chcesz zostać uczniem Szkoły w Chmurze</p>
                  <Button title={"Zapisz się"} link={"/"} bg={"#55721E"} />
               </div>
               <div className={style.button}>
                  <p className={style.login_text}>Jesteś naszym uczniem</p>
                  <Button title={"Zaloguj się"} link={"/"} bg={"#8AA7E4"} />
               </div>
            </div>
         </div>
         <div className={style.bottom}>
            <div className={style.copy}>&copy; Fundacja Społeczeństwo - Szkoła w Chmurze</div>
            <div className={style.rodo}>RODO</div>
         </div>
      </div>
   );
}
export default Footer;
