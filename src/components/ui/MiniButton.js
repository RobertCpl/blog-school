import style from "./Button.module.css";
import Link from "next/link";

function MiniButton(props) {
   return (
      <Link href={props.link} className={style.button} style={{ backgroundColor: props.bg }}>
         {props.title}
      </Link>
   );
}
export default MiniButton;
