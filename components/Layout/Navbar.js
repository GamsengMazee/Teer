import Image from "next/image";
import Link from "next/link";
import classes from "./Navbar.module.css";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import Drawer from "./Drawer";
import { useState } from "react";
import Backdrop from "./Backdrop";

export default function Navbar() {
  const [drawerOn, setDrawerOn] = useState(false); //state for drawer

  //toggle drawer function
  const toggleDrawer = () => {
    setDrawerOn(!drawerOn);
  };

  // closeDrawer function
  const drawerClose = () => {
    setDrawerOn(false);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.nav__content}>
        <Drawer sideDrawer={drawerOn} drawerClose={drawerClose} />
        {drawerOn && <Backdrop drawerClose={drawerClose} />}
        <div className={classes.logoWrapper}>
          <Link href="/">
            <Image
              src="/images/logo21.png"
              width={400}
              height={300}
              alt="logo"
            />
          </Link>
        </div>
        <div className={classes.menu__container}>
          {/* hum Menu icon */}
          <div className={classes.humIconContainer}>
            {!drawerOn ? (
              <IoIosMenu
                onClick={toggleDrawer}
                className={classes.humIcon}
                size={50}
                color="white"
              />
            ) : (
              <IoIosClose className={classes.humIcon} size={50} color="white" />
            )}
          </div>
          <ul className={classes.menu__ul}>
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
      </div>
    </nav>
  );
}
