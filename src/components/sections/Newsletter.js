import style from "./Newsletter.module.css";
import { recoleta, sen } from "../layout/Layout";
import Image from "next/image";
import Star from "../ui/Star";

function Newsletter() {
   return (
      <>
         <div className={style.wraper}>
            <h2 className={`${style.title} ${recoleta.className}`}>
               Bądź na bieżąco,
               <span>dołącz do nweslettera!</span>
            </h2>
            <div className={style.form}>
               <input type="email" placeholder="Twój adres email" className={`${style.input} ${sen.className}`} />

               <div className={style.checkboxes}>
                  <div className={style.checkbox}>
                     <input type="checkbox" name="policy" />
                     <label htmlFor="policy">
                        Oświadczam, że zapoznałem/zapoznałam się z polityką prywatności Fundacji Społeczeństwo
                     </label>
                  </div>
                  <div className={style.checkbox}>
                     <input type="checkbox" name="aggre" />
                     <label htmlFor="aggre">
                        Wyrażam zgodę na przetwarzanie podanych danych osobowych przez Fundację Społeczeństwo z siedzibą
                        w Warszawie, przy ul. Domaniewskiej 47/10. W każdym czasie można odwołać tę zgodę, uzyskać
                        dostęp do danych lub je poprawić poprzez info@szkolawchmurze.org
                     </label>
                  </div>
               </div>
               <button type="submit" className={`${style.submit} ${sen.className}`}>
                  Dołącz do newslettera
               </button>
            </div>
            <Star />

            <div className={style.circle}></div>
         </div>
      </>
   );
}
export default Newsletter;
