import Link from "next/link";
import style from "./Button.module.css";

function Button(props) {
   return (
      <Link href={props.link} className={style.button} style={{ backgroundColor: props.bg }}>
         {props.title}
      </Link>
   );
}
export default Button;
