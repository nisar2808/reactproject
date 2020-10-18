import React from 'react';
import {NavLink} from 'react-router-dom';

const Menu=()=>{

    return(
        <>
            <div className="nav">   
                <NavLink exact activeClassName="active" to="/" >Home</NavLink>
                <NavLink exact activeClassName="active" to="/about" >About Us</NavLink>
                <NavLink exact activeClassName="active" to="/service" >Service</NavLink>
                <NavLink exact activeClassName="active" to="/user/nisar" >User</NavLink>
                <NavLink exact activeClassName="active" to="/search" >Search</NavLink>
            </div>
        </>
    );
}

export default Menu;