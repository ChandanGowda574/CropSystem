import React, { useEffect, useState } from 'react'
import"../components/Orders.css";
import axios from 'axios';
import Order from "../components/Order"



function Orders() {
    const[orders,setOrders]=useState([])
useEffect(()=>{
    axios.get('http://localhost:9300/api/dealer/getAllOrder')
    .then(res=>{
        console.log(res)
        setOrders(res.data)
    })
},[])
    return (
        <div className='home'>
            <img 
            className='home__image'
            src="http://adwallpapers.xyz/uploads/posts/80036-fruit-and-veg-4k-ultra-hd-wallpaper.jpg"
            alt=" "
            />
            <div className='home__row'>
                { orders.map(order=>(
                    <Order
                        date={order.orderDate}
                        cId={order.customerId}
                        amount={order.amountPaid}
                        mode={order.modeOfPayment}
                        status={order.orderStatus}
                        quantity={order.quantity}
                        cropName={order.cropDetails.map((data)=>data.cropName)}
                    />
                ))       
                }
            </div>
        </div>
    )
}

export default Orders