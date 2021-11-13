import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';


const OrderReview = () => {
    const [products, setProducts] = useProducts(); //function written in useProducts.js file
    const [cart, setCart] = useCart(products);

    // Handle Remove Cart Function
    const handleRemoveCart = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemoveCart={handleRemoveCart}

                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default OrderReview;