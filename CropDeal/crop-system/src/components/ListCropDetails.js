import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import CropDetailsService from '../services/CropDetailsService'

const ListCropDetails = () => {

    const [cropdetails, setCrops] = useState([])

    useEffect(() => {

        getAllCrops();
    }, [])

    const getAllCrops = () => {
        CropDetailsService.getAllCrops().then((response) => {
            setCrops(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteCrop = (cropId) => {
       CropDetailsService.deleteCrops(cropId).then((response) =>{
        getAllCrops();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List cropss </h2>
            <Link to = "/add-crops" className = "btn btn-primary mb-2" > Add Crop Details</Link>

            <Link to = "/" className = "btn btn-primary mb-2" style={{marginLeft:"10px"}} > HOME</Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Crop ID</th>
                    <th> Crop Type</th>
                    <th> Crop Name </th>
                    <th>Crop Price</th>
                    <th> Crop Quantity</th>
                    <th>Uploaded By</th>
                    <th>Location</th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        cropdetails.map(
                            crops =>
                            <tr key = {crops.cropId}> 
                                <td>{crops.cropId}</td>
                                <td> {crops.cropType} </td>
                                <td> {crops.cropName} </td>
                                <td>{crops.cropPrice}</td>
                                <td>{crops.cropQuantity}</td>
                                <td>{crops.uploaded_by}</td>
                                <td>{crops.location}</td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-crops/${crops.cropId}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteCrop(crops.cropId)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListCropDetails