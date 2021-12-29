import React from "react"
import { Link } from "react-router-dom"

const Signup=()=> {
        return (
            <div>
            <br /><br />
            <div className = "container">
                
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <Link to= '/'>
                        <img 
                         className='login_logo' 
                         src="https://thumbs.dreamstime.com/z/agriculture-logo-template-design-icon-sign-symbol-farm-nature-ecology-vector-flat-81688732.jpg " 
                        alt='Logo'
                        />
                        </Link>

                            Welcome To Singnup
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Name :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter your name"
                                            name = "Name"
                                            className = "form-control"
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Email :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter email"
                                            name = "Croptype"
                                            className = "form-control"
                                        >
                                        </input>
                                    </div>

                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Mobile Number :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter mobile number"
                                            name = "CropName"
                                            className = "form-control"
                                        >
                                        </input>
                                    </div>

                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Password :</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter password"
                                            name = "price"
                                            className = "form-control"
                                        >
                                        </input>
                                    </div>
                                    <div className = "form-group mb-2">
                                        <label className = "form-label"> Role:</label>
                                        <input
                                            type = "text"
                                            placeholder = "Enter role"
                                            name = "quantity"
                                            className = "form-control"
                                        >
                                        </input>
                                    </div>
                                    
                                    <button className = "btn btn-success" >Submit </button>
                                    <Link to="/signup" className="btn btn-danger"> Cancel </Link>
                                </form>

                            </div>
                        </div>
                    </div>

            </div>

            </div>
        )
    }


export default Signup
