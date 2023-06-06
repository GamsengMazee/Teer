import classes from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.brandLogo}>
        <div className={classes.imgWrapper}>
          <Image src="/images/logo21.png" width={400} height={300} alt="logo" />
        </div>
      </div>
      <div className={classes.menu}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/predictions">Common Numbers</Link>
          </li>
          <li>
            <Link href="/dreamnumber">Dream Numbers</Link>
          </li>
          <li>
            <Link href="/previousresults">Previous Results</Link>
          </li>
        </ul>
      </div>
      <div className={classes.contact}>
        <ul>
          <li>Contact :</li>
          <li>www.teermania@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
}
