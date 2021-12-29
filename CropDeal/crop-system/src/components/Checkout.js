import React from 'react'
import { useStateValue } from '../provider/StateProvider'
import "../components/Checkout.css";
import CheckoutProduct from '../components/CheckoutProduct';
import Subtotal from '../components/Subtotal';

function Checkout() {
    const[{basket}]=useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img className='checkout__ad'
                src='https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/81e69e7d-8637-44fd-84b2-a79d3dc7f111/Target/June-2021/HL-Banner-Generic-1-666x200.jpg?tm=1599491395442&fit=constrain&hei=200&wid=666'
                alt=''
                />
               
            {basket?.length === 0 ?(
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more 
                        "Add to basket" next to the item.
                    </p>
                    </div>
                    ) : (
                        <div>
                            <h2 className='checkout__title'>Your Shopping Basket</h2>
                            {basket.map(crops=>(
                                <CheckoutProduct
                                id={crops.id}
                                cropType={crops.cropType}
                                cropName= {crops.cropName}
                                price={crops.price}
                                quantity={crops.quantity}
                                uploaded_by={crops.uploaded_by}
                                    />
                            ))}
                        </div>
                    )}
                    </div>
                    {basket.length>0 &&(
                        <div className='checkout__right'>
                           <Subtotal/> 
                        </div>
                    )}

        </div>
    );
}

export default Checkout
