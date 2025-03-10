import React from 'react';
import { Link, useLocation } from "react-router-dom"; 

export default function Navbar() {
    const location = useLocation(); 

    const links = [
        { path: '/', name: 'Home' },
        { path: '/AboutUs', name: 'About Us' },
        { path: '/Menu', name: 'Menu' }
    ];

    return (
        <div className="navbar container"> 
            <a href="#!" className="logo">Bakers</a>

            <div className="nav-links">
                <nav> 
                    {links.map(link => (
                        <Link 
                            className={location.pathname === link.path ? "active" : ""} 
                            to={link.path} 
                            key={link.name}
                        >
                            {link.name} /
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div> 
    );
}
