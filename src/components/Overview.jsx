import sprite from "../img/sprite.svg";

function Overview() {
  const getRaiting = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg className="overview__icon-star">
          <use xlinkHref={`${sprite}#icon-star`}></use>
        </svg>
      );
    }
    return stars;
  };
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__stars">
        {getRaiting()}
      </div>

      <div className="overview__location">
        <svg className="overview__icon-location">
          <use xlinkHref={`${sprite}#icon-location-pin`}></use>
        </svg>
        <button className="btn-inline">Albufeira, Portugal</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  );
}

export default Overview;
