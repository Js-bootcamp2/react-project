import { useNavigate, Link } from 'react-router-dom';
import './Header.css';
import Button from '../Button/button';
import Input from '../Input/Input';

export default function Header() {
  const navigate = useNavigate();

  let searchValue = ''
  const handleSearch = (value) => {
    searchValue = value;
    console.log('searchValue', searchValue)
  }
  
  const redirectToHome = () => {
    navigate('/1231')
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
    </header>
  )
}

