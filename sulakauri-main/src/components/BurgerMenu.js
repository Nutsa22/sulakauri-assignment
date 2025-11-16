// import {X, Menu} from "lucide-react";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {X, Menu} from "lucide-react";
import { useState } from 'react';

export default function BurgerMenuComponent() {
    const [isOpen, setIsopen] = useState(false)

    const toggleMenu = () => {
        setIsopen(!isOpen)
    }

    return (
        <>
            <button onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`nav-bar ${isOpen ? "open" : "closed"}`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}