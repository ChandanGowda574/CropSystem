import React from 'react'
import "../components/Header.css";
import{Link} from "react-router-dom"
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from"@material-ui/icons/ShoppingBasket"
import { useStateValue } from '../provider/StateProvider';
function Header() {
    const[{basket}]=useStateValue();
    console.log(basket);
     return (
        <nav className="header">
            <Link to="/">
            <img className="header__logo"
            src='https://previews.123rf.com/images/andyadi/andyadi1808/andyadi180800086/107233551-vektor-oder-symbollogo-konzeptentwurfsschablone-f%C3%BCr-landwirtschaftstechnologie-landwirtschaftsgesch%C3%A4.jpg'
            alt="Logo"
            />
            </Link>
            <div className='header__option'>
                        <span className='header__optionLineOne'>Agriculture</span>
                        <span className='header__optionLineTwo'>Crop System</span>
            </div>

            <div className='header__search'>
            <input type="text" className="header__searchInput"/>
            <SearchIcon className="header__searchIcon"/>
            </div>

            <div className='header__nav'>
                <Link to="/login" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello Guest</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>
                <Link to="/Farmer" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello Farmer</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <Link to="/returns" className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne' >Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                

                <Link to="/checkout" className='header__link'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                       <span className='header__optionLineTwo header__basketCount'>{basket.length}</span> 
                    </div>
                </Link>
            </div>
           

        </nav>
    )
}

export default Header
