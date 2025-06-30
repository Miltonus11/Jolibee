import logo from '../../assets/Images/jabee pics/Home/jabee-logo.png'
import styles from './Footer.module.css'

export function Footer(){
    return(
        <>
        <hr />
        <footer className={styles.footerContainer}>
           <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} />
           </div>
           <div className="helpfulLinksContainer">
                <p> Helpful Links</p>
                <ul>
                    <li> Contact us</li>
                    <li> United States Locations</li>
                    <li> Future Jollibee Locations</li>
                    <li> Reheating Instructions</li>
                    <li> Nutrition & Allergen</li>
                    <li> Popular Links </li>
                    <li> Gift Cards</li>
                    <li> FAQ</li>
                    <li> About Us</li>
                    <li> Buzz Room</li>
                </ul>
           </div>

           <div className="popular-searches-container">
                <p>Popular Section</p>
                <ul>
                    <li>Jollibee Merch Shop</li>
                    <li>Jollibee Rewards</li>
                    <li>Jollibee Delivery</li>
                    <li>Jollibee App</li>
                    <li>Jolliibee Near Me</li>
                    <li>Jollibee Menu</li>
                    <li>Jollibee Jobs</li>
                    <li>Jollibee Catering</li>
                    <li>Jollibee Store Hours</li>
                    <li>Jollibee Promotions</li>
                </ul>
           </div>
           <div className="menu-links-container">
                <p> Menu Links</p>
                <ul>
                    <li>Menu</li>
                    <li>Fried Chicken</li>
                    <li>Meal Deals</li>
                    <li>Spicy Chicken</li>
                    <li>Chicken Sandwiches</li>
                    <li>Chicken Tenders</li>
                    <li>Burgers</li>
                    <li>Burger Steaks</li>
                    <li>Jolly Spaghetti</li>
                    <li>Palabok Fiesta</li>
                </ul>
           </div>
          
        </footer>
        
        </>
    )
}