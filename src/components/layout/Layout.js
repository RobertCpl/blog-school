import { Sen } from "next/font/google";
import RecoletaFont from "next/font/local";
import Navigation from "./Navigation";
import style from "./Layout.module.css";
import Newsletter from "../sections/Newsletter";
import Contact from "../sections/Contact";

export const sen = Sen({
   weight: "400",
   style: "normal",
   subsets: ["latin"],
});

export const recoleta = RecoletaFont({ src: "./../../assets/fonts/Recoleta-SemiBold.woff", subsets: ["latin"] });

function Layout(props) {
   return (
      <div className={`${sen.className}  ${style.container} `}>
         {/* <Navigation /> */}

         <main>{props.children}</main>
         <Newsletter />
         <Contact />
      </div>
   );
}
export default Layout;
