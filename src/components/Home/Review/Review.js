import React, { useEffect } from 'react';
import { useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect( () => {
        fetch('http://localhost:4000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <section className="container my-5">
            <h2 className="text-center">Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
            <div className="row mt-5">
                    {
                        reviews.map(review =><ReviewCard review={review}></ReviewCard>)
                    }
            </div>
        </section>
    );
};

export default Review;