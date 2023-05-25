import Link from "next/link";
import classes from "./mobile_nav.module.css";

function Mobile_Navigation(props) {
  return (
    <nav className={classes.navigation}>
      <hr style={{color: "white", width: "100%", marginTop: "30px"}}/>
      <ul>
        <li>
          <Link
            className={classes.navLink}
            onClick={props.drawerClose}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={classes.navLink}
            onClick={props.drawerClose}
            href="/predictions"
          >
            Common Number
          </Link>
        </li>
        <li>
          <Link
            className={classes.navLink}
            onClick={props.drawerClose}
            href="/dreamnumber"
          >
            Dream Numbers
          </Link>
        </li>
        <li>
          <Link
            className={classes.navLink}
            onClick={props.drawerClose}
            href="/previousresults"
          >
            Previous Results
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Mobile_Navigation;
