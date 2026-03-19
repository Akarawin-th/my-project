import React from "react";
import Logo from "../assets/Goat.png";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {


    return (
        <div className="navbar">
            <div className="leftside">
                <img src={Logo} alt="Logo" />
                <h1>TheGoatShop</h1>
                <input type="text" placeholder="ค้นหาสินค้า" />
                <SearchIcon className="search-icon" />
            </div>
            
            <div className="rightside">
                <div>
                    <AccountCircleIcon className="account-icon" />
                </div>
            </div>
        </div>
    );
}

export default Navbar;