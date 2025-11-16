import {X, Menu} from 'lucide-react'
import { useState} from 'react'

export default function BurgerMenu(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }


  return (
        <>
            <button type="button" className="burger-menu-btn" onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`mobile-nav ${isOpen ? "open" : "closed"}`}>
      <ul>
      <li >
        <a href="products.html">წიგნების კატალოგი</a>
      </li>
      <li>
        <a href="ავტორები">ავტორები</a>
      </li>
      <li>
        <a href="სერიები">სერიები</a>
      </li>
      <li>
        <a href="სკოლა">სკოლა</a>
      </li>
      <li>
        <a href="ელწიგნები">ელწიგნები</a>
      </li>
      <li>
        <a href="ბლოგი">ბლოგები</a>
      </li>
      <li>
        <a href="ფასდაკლებები">ფასდაკლებები</a>
      </li>
      <li>
        <a href="მაღაზიები">მაღაზიები</a>
      </li>
      <li>
        <a href="საკანცელარიო">საკანცელარიო</a>
      </li>
    </ul>
  </nav>
        </>
    )
}