import logoImg from '../assets/picture.png';
import BurgerMenu from './BurgerMenu';
import Authorization from './Authorization';

export function Header() {
  return (
 <header>
  <nav className="nav">
    <div className="logo-burger">
    <h1>
      <a href="index.html" className="img-container">
        <img src={logoImg} alt="logo" />
      </a>
    </h1>
    <BurgerMenu />
    </div>
    <div className="search">
      <input type="text" name="search" defaultValue="მოძებნე" />
      <i className="fa-brands fa-searchengin" />
    </div>
    <ul className="nav-link">
      <li>
        <a href="სურვილები">სურვილები</a> <i className="fa-solid fa-heart" />
      </li>
      <li>
        <a href="კალათა">კალათა</a>
        <i className="fa-solid fa-basket-shopping" />
      </li>
      <li>
        {" "}
        <button id="autho-btn">
          <Authorization/>
          ავტორიზაცია
          <i className="fa-solid fa-user" />
        </button>
      </li>
    </ul>
   
  </nav>
  <nav className="nav-bar">
    <ul>
      <li>
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
  <nav className="mobile-nav">
    <ul>
      <li>
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
</header>
  );
}