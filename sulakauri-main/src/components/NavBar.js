import { useState } from "react";
import {X, Menu} from "lucide-react";

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <button onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size = {24} />}
            </button>
            <nav className={`nav-bar ${isOpen ? "open" : "close"}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}