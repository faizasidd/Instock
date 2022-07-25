import './Header.scss';
import InStockLogo from '../../assets/logo/InStock-Logo_1x.png';
import { NavLink, Link } from 'react-router-dom';
import * as React from "react";

function Header() {

    return (
        <>
        <div className='header__wrapper'>
            <div className='header__logo-wrapper'>
                <Link to="/">
                <img src={InStockLogo} />
                </Link>
            </div>
            <div className='header__link-wrapper'>
                <NavLink className="header__warehouses" to="/">
                <div>Warehouses</div>
                </NavLink>

                
                <div className="header__inventory">Inventory</div>
                
            </div>
        </div>
        </>
    );
}

export default Header;