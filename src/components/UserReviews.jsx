function UserReviews() {
  const feedback = [
    {
      reviewText:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
      image: require("../img/user-1.jpg"),
      reviewerName: "Nick Smith",
      reviewDate: "Feb 23rd, 2022",
      rating: "7.8",
    },
    {
      reviewText:
        " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
      image: require("../img/user-2.jpg"),
      reviewerName: "Mary Thomas",
      reviewDate: "Sept 13th, 2021",
      rating: "9.3",
    },
  ];

  const feedbackReactElements = feedback.map((item, index) => {
    return (
      <figure key={index} className="review">
        <blockquote className="review__text">{item.reviewText}</blockquote>
        <figcaption className="review__user">
          <img src={item.image} alt="" className="review__photo" />
          <div className="review__user-box">
            <p className="review__user-name">{item.reviewerName}</p>
            <p className="review__user-date">{item.reviewDate}</p>
          </div>
          <div className="review__rating">{item.rating}</div>
        </figcaption>
      </figure>
    );
  });

  return (
    <div className="user-reviews">
      {feedbackReactElements}
      <button className="btn-inline">
        Show all <span>&rarr;</span>
      </button>
    </div>
  );
}

export default UserReviews;
