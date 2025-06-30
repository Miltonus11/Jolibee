import styles from './HomeCard.module.css'
import img from '../../assets/Images/jabee pics/Menu/chicken-nuggets-menu.jpg'
function HomeCard(props){
    return(
        <div className={styles.cardContainer}>
            <div className={styles.cardLeft}>
                <img className={styles.image}src={img}/>
            </div>
            <div className={styles.cardRight}>
                <p className={styles.title}>{props.title}</p>
                <p className={styles.header}>{props.header}</p>
                <p className={styles.desc}>{props.desc}</p>
                <button className={styles.btnOrder}> Order Now </button>
            </div>
        </div>
    )
}
export default HomeCard;