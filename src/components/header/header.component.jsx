import React from 'react'
import { Link } from 'react-router-dom'
import "./header.style.scss"
import { ReactComponent as Logo } from "../../assets/crown.svg"

const header = () => (

    <div className="header">
        <Link className="logo-container" to="/">
            <Logo></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/Shop">
                Shop
            </Link>
            <Link className="option" to="/Shop">
                Contact us
            </Link>
        </div>
    </div>
);

export default header