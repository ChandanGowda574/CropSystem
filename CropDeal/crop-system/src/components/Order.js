import React from 'react'
import '../components/Order.css'


function Order({id,date,cId,amount,mode,status,quantity,cropName}) {
   
    
    return (
        <div className='order'>
            <p><strong>CustomerID:</strong>{cId}</p>
            <p><strong>Order Details</strong></p>
            <p><strong>Name:</strong>{cropName}</p>
            <p><strong>Quantity:</strong>{quantity}</p>
            <p className='order__price'><strong>Total Amount:Rs</strong>
                {amount}
            </p>
            <p><strong>Order Date:</strong>{date}</p>
            <p><strong>Payment Mode:</strong>{mode}</p>
            <p><strong>Payment Status:</strong>{status}</p>
        </div>
    );
}
export default Order