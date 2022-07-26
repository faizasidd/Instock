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
                
                <NavLink className="header__link" to='/warehouse/5bf7bd6c-2b16-4129-bddc-9d37ff8539e9/inventory'>
                    <div className="header__inventory">Inventory</div>
                </NavLink>
            </div>
        </div>
        </>
    );
}

export default Header;