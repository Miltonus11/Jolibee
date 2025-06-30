import logo from './../assets/Images/jabee pics/Home/jabee-logo.jg'
import './Header.css'
import { Link } from 'react-router-dom'

export function Header () {
    return (
        <>
        <header className="header">
            <img className="logo" src={logo} alt="logo"/> 
        </header>
        </>
        
    )
}
