

function BookNow(){
    return(
        <div className="cta">
            <h2 className="cta__book-now">
              "Good news! "We have four free rooms for your selected dates!"
            </h2>
            <button className="btn">
              <span className="btn__visible">Book now</span>
              <span className="btn__invisible">Only 4 rooms left</span>
            </button>
          </div>
    )
}

export default BookNow;