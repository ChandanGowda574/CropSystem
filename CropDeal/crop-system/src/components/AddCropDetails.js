import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
import CropDetailsService from '../services/CropDetailsService';


const AddCropDetails=()=> {

        const [cropId, setCropId] = useState('')
        const [cropType, setCropType] = useState('')
        const [cropName, setCropName] = useState('')
        const [cropPrice, setCropPrice] = useState('')
        const [cropQuantity, setCropQuantity] = useState('')
        const [uploaded_by, setuploded] = useState('')
        const [location, setlocation] = useState('')
        const history = useNavigate();
        const {id} = useParams();

        const saveOrUpdateCrops = (e) => {
            e.preventDefault();

            const crops = {cropId,cropType,cropName,cropPrice,cropQuantity,uploaded_by,location}

                CropDetailsService.addCrops(crops).then((response) =>{

                    console.log(response.data)
        
                    history.navigate('/crops');
        
                }).catch(error => {
                    console.log(error)
                })
            
            
        }

        useEffect(() => {

            CropDetailsService.getCropsById(cropId).then((response) =>{
                setCropId(response.data.cropId)
                setCropType(response.data.cropType)
                setCropName(response.data.cropName)
                setCropPrice(response.data.cropPrice)
                setCropQuantity(response.data.cropQuantity)
                setuploded(response.data.uploaded_by)
                setlocation(response.data.location)
            }).catch(error => {
                console.log(error)
            })
        }, [])

        const title = () => {

            if(cropId){
                return <h2 className = "text-center">Update Crops</h2>
            }else{
                return <h2 className = "text-center">Add Crops</h2>
            }
        }

        return (
            <div>
            <br /><br />
            <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        {
                            title()
                        }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Crop ID :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter Crop ID"
                                            name = "CropID"
                                            className = "form-control"
                                            value = {cropId}
                                            onChange = {(e) => setCropId(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Crop Type :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter Crop Type"
                                            name = "Croptype"
                                            className = "form-control"
                                            value = {cropType}
                                            onChange = {(e) => setCropType(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Crop Name :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter Crop Name"
                                            name = "CropName"
                                            className = "form-control"
                                            value = {cropName}
                                            onChange = {(e) => setCropName(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Price :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter Price"
                                            name = "price"
                                            className = "form-control"
                                            value = {cropPrice}
                                            onChange = {(e) => setCropPrice(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Quantity:</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter Quantity"
                                            name = "quantity"
                                            className = "form-control"
                                            value = {cropQuantity}
                                            onChange = {(e) => setCropQuantity(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Uploded By :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter Uploaded by"
                                            name = "price"
                                            className = "form-control"
                                            value = {uploaded_by}
                                            onChange = {(e) => setuploded(e.target.value)}
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Location :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter location"
                                            name = "location"
                                            className = "form-control"
                                            value = {location}
                                            onChange = {(e) => setlocation(e.target.value)}
                                        >
                                        </input>
                                    </div>

                                    <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCrops(e)} >Submit </button>
                                    <Link to="/crops" className="btn btn-danger"> Cancel </Link>
                                </form>

                            </div>
                        </div>
                    </div>

            </div>

            </div>
        )
    }


export default AddCropDetails
