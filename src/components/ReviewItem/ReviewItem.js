import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, price, quantity, img, key } = props.product;
    const { handleRemoveCart } = props;

    return (
        <div className="review-product">
            <div>
                <h4 className="product-name">{name}</h4>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemoveCart(key)} className="btn-regular">Remove</button>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ReviewItem;