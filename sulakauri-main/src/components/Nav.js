import styled from "styled-components" 

const Href = styled.a`
    color: red;
`
export function NavBar(){

    return (
        <nav className="nav">
      <h1>
        <a href="index.html" className="img-container">
          <img src="./assets/picture.png" alt="logo" />
        </a>
      </h1>
      <div className="search">
        <input type="text" name="search" defaultValue="მოძებნე" />
        <i className="fa-brands fa-searchengin" />
      </div>
      <ul className="nav-link">
        <li>
          <Href href="სურვილები">სურვილები</Href> <i className="fa-solid fa-heart" />
        </li>
        <li>
          <a href="კალათა">კალათა</a>
          <i className="fa-solid fa-basket-shopping" />
        </li>
        <li>
          {" "}
          <button id="autho-btn">
            ავტორიზაცია
            <i className="fa-solid fa-user" />
          </button>
        </li>
      </ul>
      <button className="burger-menu-btn">
        <img src="./assets/burger-bar.png" alt="burger-menu" />
      </button>
      </nav>
    )
}