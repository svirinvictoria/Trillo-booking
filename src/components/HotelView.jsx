import BookNow from "./BookNow";
import Description from "./Description";
import Gallery from "./Gallery"
import Overview from "./Overview";
import UserReviews from "./UserReviews";

function HotelView(){
    return(
        <div className="hotel-view">
             <Gallery />
             <Overview />
             <div className="detail">
                <Description/>
                <UserReviews/>
             </div>

             <BookNow/>
        </div>
       

    )
}

export default HotelView;