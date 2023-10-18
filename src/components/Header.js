import logo from '../assets/shop-cart-logo-removebg-preview.png';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


export const Header = () => {
    return (
      <header>
        <Link to="/" className="logo">
          <img src={logo} alt="Shopping-cart-logo" />
          <span>Shopping Cart</span>
        </Link>
        <nav className="navigation">
          <NavLink to="/" className="link" end>Home</NavLink>
          <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>
        <Link to="/cart" className="items">
          <span>Cart: 2</span>
        </Link>
      </header>
    )
  }