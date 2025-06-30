import styles from './Menu.module.css'
import '../../index.css'
import MenuCard from '../../components/MenuCard/MenuCard'
import imgBurger from '../../assets/Images/jabee pics/Menu/Burgers/aloha-champ.png'
import imgChickenJoy from '../../assets/Images/jabee pics/Menu/Chickenjoy/1pc-chickenjoy.png'
import imgChickenNuggets from '../../assets/Images/jabee pics/Menu/Chicken-Nuggets/6pc-nuggets.png'
import imgBurgerSteak from '../../assets/Images/jabee pics/Menu/Burger-Steak/1pc-burger-steak.png'
import imgFries from '../../assets/Images/jabee pics/Menu/Fries-Sides/fries.png'
import imgBeverages from '../../assets/Images/jabee pics/Menu/Beverages/coke.png'
export function Menu(){
    const MenuList = [
        {
            id:1,
            productName: 'Burger',
            image: imgBurger,
            price: 10.99
        },
        {
            id:2,
            productName: 'Chicken Joy',
            image: imgChickenJoy,
            price: 11.99
        },
        {
            id:3,
            productName: 'Chicken Nuggets',
            image: imgChickenNuggets,
            price: 12.99
        },
        {
            id:4,
            productName: 'Burger Steak',
            image: imgBurgerSteak,
            price: 13.99
        },
        {
            id:5,
            productName: 'Fries',
            image: imgFries,
            price: 14.99
        },
        {
            id:6,
            productName: 'Beverages',
            image: imgBeverages,
            price: 15.99
        },
    ]
    const menuItems = MenuList.map((item) =>
        <MenuCard key={item.id} product={item}/>
    )
    return (
        <section className={styles.MenuContainer}>
            <p className={styles.menuHeader}> Menu</p>
            <div className={styles.foodContainer}>
                {menuItems}
            </div>

        </section>
    )
}