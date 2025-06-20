import classes from "./card.module.css";

export default function Card(props) {
  return <div className={`${classes.card}   ${props.classes}`}>{props.children}</div>;
}
