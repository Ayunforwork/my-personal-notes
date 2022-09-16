import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';


function Navigation() {
    return (
        <nav className="navigation">
            <ul>
               <li><Link to="/">Aplikasi Catatan</Link></li>
               <li><Link to="/arsip">Arsip</Link></li>
               <li><Link to="/add"><FiPlusCircle/></Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;