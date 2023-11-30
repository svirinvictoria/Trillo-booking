import sprite from "../img/sprite.svg";
import "../css/style.css";

function SideBar() {
  const myBar = [
    { name: "Hotel", iconName:"home", iconPicture: "`${sprite}#icon-home`" },
    { name: "Flight",iconName:"aircraft-take-off", iconPicture: "`${sprite}#icon-aircraft-take-off`" },
    { name: "Car Rental", iconName:"key", iconPicture: "`${sprite}#icon-key`" },
    {name: "Tours", iconName:"map", iconPicture:"`${sprite}#icon-map`"}
  ];

  const myBarReactElements = myBar.map((item, index) => {return(
    <li key = {index} className="side-nav__item ">
          <a href="#" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref={`${sprite}#icon-${item.iconName}`}></use>
            </svg>
            <span>{item.name}</span>
          </a>
        </li>
  )})

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {myBarReactElements}
      </ul>

      <div className="legal">
        &copy; 2023 by Victoria Svirin. Design by Jonas Schmidtmann. The Project
        is allowed to be used as part of portfolio.
      </div>
    </nav>
  );
}

export default SideBar;
