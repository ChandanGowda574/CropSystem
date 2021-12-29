import React, { useEffect, useState } from 'react'
import"../components/Home.css";
import Product from './Product';
import axios from 'axios';



function Home() {
    const[crop,setCrop]=useState([])
useEffect(()=>{
    axios.get('http://localhost:9000/api/crops/findAllcropdetails')
    .then(res=>{
        console.log(res)
        setCrop(res.data)
    })
},[])
    return (
        <div className='home'>
            <img 
            className='home__image'
            src="https://wallpaperaccess.com/full/803470.jpg"
            alt=" "
            />
            <div className='home__row'>
                { crop.map(crops=>(
                    <Product
                    id={crops.cropId}
                    cropType={crops.cropType}
                    cropName= {crops.cropName}
                    price={crops.cropPrice}
                    quantity={crops.cropQuantity}
                    uploaded_by={crops.uploaded_by}
                    />

                ))       
                }
            </div>
        </div>
    )
}

export default Home
