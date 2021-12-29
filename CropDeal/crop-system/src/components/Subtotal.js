import React from 'react'
import'../components/Subtotal.css'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from '../provider/StateProvider';
import { getBasketTotal } from '../reducer/reducer';

function Subtotal() {
    const[{basket},]=useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=>(
                <>
                <p>
                    SubTotal({basket.length} items):
                     <strong>{value}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type="checkbox"/>This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rs"}
            />
            <a href='http://localhost:8085/'>
            <button>
                Proceed to Checkout
            </button>
            </a>
            
        </div>
    )
}

export default Subtotal
