import React ,{useState} from "react"
import '../../assets/fonts/jellee/Jellee-Roman.ttf'
import logo from '../../assets/Images/jabee pics/Home/jabee-logo.png'
import styles from './Home.module.css'
import '../../index.css'
import bfastMenu from '../../assets/Images/jabee pics/Menu/breakfast-menu.png'
import HomeCard from "../../components/HomeCards/HomeCard"

export function Home(){
    const [delivery, setDelivery] = useState('');
    const cardDetails = [
        {
            id:1, 
            title: 'New Limited Time Flavor', 
            header: 'Guava Sips',
            desc: 'Refreshing guava drinks available in quencher, freeze, and premium iced tea. Price and store participation vary.'
        },
        {
            id:2,
            title:'Delicious Value. Joyful Moments.',
            header: 'Chickenjoy Meal Deals',
            desc: ''
        },
        {
            id:3,
            title:'Jolly Merch Shop',
            header: 'Merch Madness: New Drop!',
            desc: 'A new era of jolly style is here! Shop the second drop of our latest collection.'
        },
        
    ]
    const content = cardDetails.map((cardDetails) =>
        <HomeCard key={cardDetails.id} title={cardDetails.title} header={cardDetails.header} desc={cardDetails.desc}/>
    )
    function handleDeliveryChange (e){
        setDelivery(e.target.value);
    }
    return (
        <>

        <section className={styles.heroSection}>
            <div className={styles.heroLeftPart}>
                <img src={logo} style={{width: 100}} />
                <p style={{color: '#d7263a', fontFamily:'BetMMedium', fontSize: 22, margin: 0}}> New Jollibee Rewards Members Exclusive: </p>
                <p className={styles.Jellee}> Spend $45, <br/> Get $10 Off</p>
                <div className={styles.heroContainer}>
                    <button className={styles.customBtn}> Sign Up</button>
                    <button className={styles.customBtnOrder}> Order Now</button>
                </div>
            </div>
            <div className={styles.heroRightPart}>
                <img src={bfastMenu} style={{width: 500, height: 400}}/>
            </div>
        </section>

        <section className={styles.HomeCardSection}>
            {content}
        </section>
       
            
        </>
        
    )
}