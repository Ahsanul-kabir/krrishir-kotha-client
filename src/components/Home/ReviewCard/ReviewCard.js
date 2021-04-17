import React from 'react';
import './ReviewCard.css'

const ReviewCard = ({review}) => {
    return (
        <div className="col-md-4 col-sm-12">
            <div className="review-item my-4">
                <div className="d-flex align-items-center">
                    {
                        review.image ? <img style={{width: '20%'}} src={`data:image/png;base64,${review.image.img}`}/>
                        :
                        <img style={{width: '20%'}} className="img-fluid mb-3" src={`http://localhost:4000/${review.img}`} alt=""/>
                    }
                    <div className="ml-3 mt-3">
                        <h5>{review.name}</h5>
                        <p>{review.designation}</p>
                    </div>
                </div>
                <p style={{color: '#707070'}}>{review.description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;