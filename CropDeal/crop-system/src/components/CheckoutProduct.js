import React from 'react'
import "../components/CheckoutProduct.css";
import { useStateValue } from '../provider/StateProvider';

function CheckoutProduct({id,cropType,cropName,price,quantity,uploaded_by}) {
    const [,dispatch]=useStateValue();

    const removeFromBasket=()=>
    {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        });
    };
    return (
        <div className='checkoutProduct'>
            <p><strong>Type:</strong>{cropType}</p>
            <p><strong>Name:</strong>{cropName}</p>
            <p className='product__price'><strong>Price:</strong>
                <small>Rs</small>
                <strong>{price}</strong>
            </p>
            <p><strong>Quantity:{quantity}</strong></p>
            <p><small>Provdide BY:</small>{uploaded_by}</p>   
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
    )
}

export default CheckoutProduct
