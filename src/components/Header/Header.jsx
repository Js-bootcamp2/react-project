import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import Button from '../Button/button';
import Input from '../Input/Input';

export default function Header({cart, setCart}) {

  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  let searchValue = ''
  const handleSearch = (value) => {
    searchValue = value;
    console.log('searchValue', searchValue)
  }
  
  const redirectToHome = () => {
    navigate('/1231')
  }

  const handleToggleCart = () => {
    setShowCart(!showCart)
  }

  const handleClearCart = () => {
    setCart([]);
  }
  
  return (
    <header className="header">
      <div onClick={redirectToHome} className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="" />
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>

      <div>
        <Input value={searchValue} onChange={handleSearch} type="text" />
        <Input value={searchValue} onChange={handleSearch} type="text" />
      </div>

      <div>
        <Button type="black" onClick={handleToggleCart}>cart</Button>
      </div>
      {showCart && (
        <div className="cart-container">
          {cart.length > 0 && (
            <div>
              <Button onClick={handleClearCart} type="white">Clear Cart</Button>
            </div>
          )}
          <div>
            {cart.map((item, i) => <div key={i} className="cart-item">{item.name}</div>)}
          </div>
        </div>
      )}
      <div>

      </div>
    </header>
  )
}

