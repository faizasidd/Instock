import './Header.scss';
import InStockLogo from '../../assets/logo/InStock-Logo_1x.png';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
        <div className='header__wrapper'>
            <Link to="/">
            <img src={InStockLogo} />
            </Link>
            <div className='header__link-wrapper'>
                <Link to="/">
                <h1>Warehouses</h1>
                </Link>
                <Link to="/inventory">
                <h1>Inventory</h1>
                </Link>
            </div>
        </div>
        </>
    );
}

export default Header;