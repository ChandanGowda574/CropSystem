import React from 'react'
import '../components/Product.css'
import { useStateValue } from '../provider/StateProvider';

function Product({id,cropType,cropName,price,quantity,uploaded_by}) {
    // eslint-disable-next-line no-unused-vars
    const[{basket},dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
            id:id,
            cropName:cropName,
            cropType:cropType,
            quantity:quantity,
            price:price,
            uploaded_by:uploaded_by,
            },
        });

    }
    return (
        <div className='product'>
            <p><strong>Type:</strong>{cropType}</p>
            <p><strong>Name:</strong>{cropName}</p>
            <p className='product__price'><strong>Price:Rs</strong>
                {price}
            </p>
            <p><strong>Quantity:</strong>{quantity}</p>
            <p><strong>Provdide BY:</strong>{uploaded_by}</p>
            
            <button onClick={addToBasket}>Add to basket</button>
            
        </div>
    );
}
export default Product