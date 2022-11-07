import "./NavBar.css"
import Logo from "../../assets/logo1.png"
import { CartWidget } from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <div>
            <nav className='navegacion'>
                <div>
                    <Link to="/">
                    <img className='logo' src={Logo} alt='logo'></img>
                    </Link>
                </div>
                <div className='list'>
                    <Link to="/">Inicio</Link>
                    <NavLink className={({isActive}) => isActive === true ? "claseActiva" : "claseInactiva"} to="/category/Criptomonedas">Criptomonedas</NavLink>
                    <NavLink className={({isActive}) => isActive === true ? "claseActiva" : "claseInactiva"} to="/category/NFTS">NFTS</NavLink>

                </div>
                <div>
                    <Link to="/cart">
                        <CartWidget/>
                    </Link>
                </div>
            </nav>
        </div>

    );
};