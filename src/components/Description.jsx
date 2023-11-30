import user3 from "../img/user-3.jpg";
import user4 from "../img/user-4.jpg";
import user5 from "../img/user-5.jpg";
import user6 from "../img/user-6.jpg";

function Description() {
  const benefits = [
    "Close to the beach",
    "Breakfast included",
    "Free airport shuttle",
    "Free wifi in all rooms",
    "Air conditioning and heating",
    "Pets allowed",
    "We speak all languges",
    "Perfect for families",
  ];

  const benefitsAsReactElements = benefits.map((item, index) => {
    return (
      <ul className="list" key={index}>
        <li className="list__item">{item}</li>
      </ul>
    );
  });

  return (
    <div className="description">
      <p className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </p>
      <p className="paragraph">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </p>
      <div className="list__section">{benefitsAsReactElements}</div>

      <div className="recommend">
        <p className="recommend__count">
          Lucy and the other friends recommend this hotel
        </p>
        <div className="recommend__friends">
          <img src={user3} alt="" className="recommend__photo" />
          <img src={user4} alt="" className="recommend__photo" />
          <img src={user5} alt="" className="recommend__photo" />
          <img src={user6} alt="" className="recommend__photo" />
        </div>
      </div>
    </div>
  );
}

export default Description;
