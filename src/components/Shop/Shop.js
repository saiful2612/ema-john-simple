import React, { useState } from 'react';
import fakedata from '../../fakeData';
import './Shop.css';

const Shop = () => {
    const first10=fakedata.slice(0,10);
    const [products, setProducts]= useState(first10);    
    return (
        <div className="shop-container">

            <div className="product-container">
                
                {
                    products.map(pd => <Product product={pd}></Product>)
                }
                

            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>

        </div>
    );
};

export default Shop;