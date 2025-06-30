import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
export function Layout() {
    return (
        <>
            <NavBar/>
            
            <main>
                <Outlet/>
                <Footer />
            </main>
        </>
    )
}