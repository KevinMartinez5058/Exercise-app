import React from 'react';

const reviews = [
  {
    name: 'John Herring',
    rating: 5,
    review: 'This product is amazing! Highly recommend it.',
  },
  {
    name: 'Jane Mason',
    rating: 4,
    review: "Very good, but there's room for improvement.",
  },
  {
    name: 'Alex Morrison',
    rating: 3,
    review: "It's okay, not bad but not great either.",
  },
  {
    name: 'Emily Davis',
    rating: 5,
    review: 'Exceeded my expectations. Will buy again!',
  },
  {
    name: 'Michael Brown',
    rating: 2,
    review: 'Not satisfied with the quality.',
  },
];
const ReviewList = ({ name, rating, review }) => {
  return (
    <div className="review-list">
      <h3>{name}</h3>
      <p>Rating: {'⭐'.repeat(rating)}</p>
      <p>{review}</p>
    </div>
  );
};
export default function Review() {
  const topReviews = reviews.slice(0, 3);
  return (
    <section className="review">
      <div className="content-title">
        <div className="line"></div>
        <h2>Our Customers Reviews</h2>
        <div className="line"></div>
      </div>
      <p className="review-text">
        Join our today and start achieving your goals with personalized
        workouts, real-time feedback, and motivational support. Take the first
        step towards a healthier you - sign up now and discover the power of
        personalized coaching!"
      </p>
      <div>
        {topReviews.map((review, index) => (
          <ReviewList
            key={index}
            name={review.name}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </div>
    </section>
  );
}
