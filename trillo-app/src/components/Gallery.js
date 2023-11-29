import hotel1 from "../img/hotel-1.jpg";
import hotel2 from "../img/hotel-2.jpg";
import hotel3 from "../img/hotel-3.jpg";

function Gallery() {
  return (
    <div className="gallery">
      {/* <!-- the fifure element enables us to give fig caption element to give this images a caption--> */}
      <figure className="gallery__item">
        <img src={hotel1} alt="" className="gallery__photo" />
      </figure>

      <figure className="gallery__item">
        <img src={hotel2} alt="" className="gallery__photo" />
      </figure>

      <figure className="gallery__item">
        <img src={hotel3} alt="" className="gallery__photo" />
      </figure>
    </div>
  );
}

export default Gallery;
