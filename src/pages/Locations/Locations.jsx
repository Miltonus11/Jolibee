import React, {useState} from "react";
import styles from './Locations.module.css'
import '../../index.css'
import poster1 from '../../assets/Images/jabee pics/AboutUs/poster2.jpg'
import poster2 from '../../assets/Images/jabee pics/AboutUs/poster.jpg'
import poster3 from '../../assets/Images/jabee pics/AboutUs/poster3.png'
import { AiOutlineExport } from "react-icons/ai";
import { FaFontAwesome } from "react-icons/fa";
export function Location(){
    const [delivery, setDelivery] = useState('')
    function handleDeliveryChange (e){
        setDelivery(e.target.value);
    }
    return (
        <>
   

        <div className={styles.heroContainer} style={{ backgroundImage: `url(${poster1})` }}>
            <div className={styles.overlay}>
                <div className={styles.restaurantLocationCard}>
                    <p className={styles.restaurantHeader}>Restaurants Near Me</p>
                    <p className={styles.restaurantDesc}> Order food from Jollibee locations across  the <br/>United States and canada.</p>

                    <select className={styles.deliveryDropDown} value={delivery} onChange={handleDeliveryChange}>
                        <option value=""> Select a delivery method </option>
                        <option value="pick-up"> Pick Up</option>
                        <option value="delivery"> Delivery </option>
                    </select>

                    <input className={styles.searchBar} type="search"></input>

                    <button className={styles.customButton}> Search</button>
                    <button className={styles.btnUseLocation}> Use My Location </button>
                </div>
            </div>
        </div>

        <section className={styles.locationAboutContainer}>
            <div className="image-container">
                <img className={styles.poster2} src={poster2} alt="poster2" />
            </div>
            <div className="desc-container">
                <p className={styles.countryHeader}> United States </p>
                <p className={styles.locationHeader}> Locations </p>
                <p className={styles.desc}>In conjunction with our mission to spread the joy of Jollibee across the globe, we are all about family. As we grow, we will work hard to continue to forge partnerships with local community organizations to be a catalyst that spreads 
                    joy and the family values we espouse wherever we go. </p>
                <p className={styles.desc}> It is our commitment to serve quality, great-tasting Filipino food near you that offers value for money, friendly and efficient service, and a clean restaurant environment. Gather your family and loved ones to share our Fried Chicken, Bucket Meals, Chicken Tenders, Burger Steaks or 
                    Filipino Palabok Fiesta and enjoy the smiles on their faces.</p>
            
            </div>
        </section>
        
        <section className={styles.newStores}>
            <div className={styles.newStoresHeader}>
                <p className={styles.newStoreHeaderTitle}> New Store Openings</p>
                <p className={styles.newStoreHeaderText}> View All <a>Future Jollibee Locations</a></p>
            </div>
            
            <div className={styles.storeImageContainer}>
                <div className={styles.storeImageIndividualContainer}>
                    <img src={poster3}/>
                    <p className={styles.storeName}> Jollibee Union</p>
                    <button className={styles.btnStoreDetails}>Store Details <AiOutlineExport /></button>
                </div>
                <div className={styles.storeImageIndividualContainer}>
                    <img src={poster2} style={{width: 400}}/>
                    <p className={styles.storeName}> Jollibee Hillsboro</p>
                    <button className={styles.btnStoreDetails}>Store Details <AiOutlineExport /></button>
                </div>
                <div className={styles.storeImageIndividualContainer}>
                    <img src={poster1} style={{width: 600}}/>
                    <p className={styles.storeName}> Jollibee Newark</p>
                    <button className={styles.btnStoreDetails}>Store Details <AiOutlineExport /></button>
                </div>
            </div>
        </section>
        </>
        
    )
}