import logo from "../img/logo.png";
import myPhoto from "../img/my-photo.png";
import sprite from "../img/sprite.svg";
import "../css/style.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="trillo logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Hotels"
        />
        <button className="search__button">
          {/* <!-- this is how we include SVG icons in HTML using sprite file --> */}
          <svg className="search__icon">
            <use xlinkHref = {`${sprite}#icon-magnifying-glass`}></use>
          </svg>
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
             <use xlinkHref={`${sprite}#icon-bookmark`}></use> 
          </svg>
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <svg className="user-nav__icon">
             <use xlinkHref={`${sprite}#icon-chat`}></use> 
          </svg>
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src={myPhoto} alt="" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Viki</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
