import { Link } from "react-router-dom"
import logo from './../assets/Images/jabee pics/Home/jabee-logo.jpg'
import '../index.css'
import { FaLocationDot } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";

import styles from './NavBar.module.css'
export function NavBar () {
    return(
       <>   
       <nav className={styles.mainHeader}>
            
            <Link className={styles.links} to="/">
            <img src={logo} style={{height: 120}} />
            </Link>
            <Link className={styles.links} to="/MenuPage">Menu</Link>
            <Link className={styles.links} to="/LocationPage">Location</Link>
            <Link className={styles.links} to="/RewardsPage">Rewards</Link>
            <Link className={styles.links} to="/FranchisingPage">Franchising</Link>
            <Link className={styles.links} to="/JollyMerch">JollyMerch</Link>
            <Link className={styles.links} to="/Cart"> <IoBagOutline /></Link>
        </nav>
         <div className={styles.orderNowContainer}>
                    <p className={styles.orderHeader}><FaLocationDot /> Choose a location to order</p>
                    <button className={styles.orderButton}> Order Now</button>
        </div>
       </> 
    )
}