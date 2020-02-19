import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <div className="navbar-container">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <NavLink to="/" className="navbar-brand">Track Fit</NavLink>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="active"><NavLink to="/">Exercises</NavLink></li>
                        <li><NavLink to="/create">Create Exercise Log</NavLink></li>
                        <li><NavLink to="/user">Create User</NavLink></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default Navbar;