import Image from "next/image";
import style from "./Contact.module.css";
import { recoleta } from "../layout/Layout";
import photo from "./../../assets/images/natalia_bartek.webp";
import phone_icon from "./../../assets/images/phone_icon.svg";
import email_icon from "./../../assets/images/email_icon.svg";
import twitter from "./../../assets/images/twitter.svg";
import youtube from "./../../assets/images/youtube.svg";
import linkedin from "./../../assets/images/linkedin.svg";
import tiktok from "./../../assets/images/tiktok.svg";
import instagram from "./../../assets/images/instagram.svg";
import facebook from "./../../assets/images/facebook.svg";
function Contact() {
   return (
      <div className={style.wraper}>
         <div className={style.content}>
            <div className={style.photo}>
               <Image src={photo} />
            </div>
            <div className={style.contact}>
               <p className={style.contact_title}>Kontakt</p>
               <div className={style.phone}>
                  <div className={style.phone_icon}>
                     <Image src={phone_icon} />
                  </div>
                  <div className={`${style.phone_number} ${recoleta.className}`}>(+48) 723 112 211</div>
               </div>
               <p className={style.days}>
                  pn/wt/czw/pt: 8:30 - 18:00
                  <span>środa: 11:00 - 18:00</span>
               </p>
               <p className={style.comments}>
                  W sprawach związanych z egzaminami prosimy kontaktować się mailowo lub przez czat.
               </p>
               <div className={style.email}>
                  <div className={style.email_icon}>
                     <Image src={email_icon} />
                  </div>
                  <a href="mailto: hejka@szkolawchmurze.org" className={style.email_address}>
                     hejka@szkolawchmurze.org
                  </a>
               </div>
            </div>
            <div className={style.secretariat}>
               <p className={style.secretariat_title}>Sekretariat Szkoły</p>
               <p className={style.days}>
                  pn-pt: 9.00 - 16:30
                  <span>ul. Powąkowska 44C, 01-797 Warszawa</span>
               </p>
               <div className={style.comments}>
                  wejście A (od skrzyżowania ul. Krasińskiego z ul. Powązkowską), piętro IV
               </div>
            </div>
            <div className={style.social}>
               <p className={style.social_title}>Nasze social media</p>
               <div className={style.social_one}>
                  <div className="twiter">
                     <Image src={twitter} />
                  </div>
                  <div className="youtube">
                     <Image src={youtube} />
                  </div>
                  <div className="linkedIn">
                     <Image src={linkedin} />
                  </div>
               </div>
               <div className={style.social_two}>
                  <div className="tiktok">
                     <Image src={tiktok} />
                  </div>
                  <div className="instagram">
                     <Image src={instagram} />
                  </div>
                  <div className="facebook">
                     <Image src={facebook} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Contact;
