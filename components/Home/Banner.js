import Image from "next/image";
import classes from './Banner.module.css'

export default function Banner() {
    return (
        <div className={classes.banner}>
            <Image className={classes.bannerImage} loading="lazy" src="/images/banner1.jpg" width={1000} height={400} alt="banner_img" />
            <div className={classes.bannerText}>
                <h1>GET YOUR</h1>
                <h1>TEER RESULTS</h1>
            </div>

        </div>
    )
}