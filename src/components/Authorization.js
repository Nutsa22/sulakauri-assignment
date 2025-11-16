import {X, Menu} from 'lucide-react'
import { useState} from 'react'

export default function AuthorizationSection(){
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <button type="button" className="autho-btn" onClick={toggleMenu}>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <nav className={`autorization-section ${isOpen ? "open" : "closed"}`}>
        <div>
  <div className="login-section">
    <div className="login">
      <button className="login-btn">ავტორიზაცია</button>
      <button className="registration">რეგისტრაცია</button>
    </div>
    <div className="line" />
    <form className="form">
      <div className="container">
        <p>
          კეთილი იყოს თქვენი დაბრუნება. თუ ჯერ არ გაქვთ ანგარიში{" "}
          <a href="">დარეგისტრილდით</a>
        </p>
        <label htmlFor="email">ელფოსტა</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="container">
        <label htmlFor="password">პაროლი</label>
        <input type="password" id="password" name="password" />
      </div>
    </form>
    <div className="btn">
      <button className="auto-btn-two">ავტორიზაცია</button>
      <button className="forgot-btn">დაგავიწყდა პაროლი?</button>
    </div>
    <div className="social-btn">
      <button className="google-btn">ავტორიზაცია Google-ით</button>
      <button className="facebook-btn">ავტორიზაცია Facebook-ით</button>
    </div>
  </div>
</div>
  </nav>
        </>
    )

}



