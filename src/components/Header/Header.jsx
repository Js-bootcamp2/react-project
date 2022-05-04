import './Header.css';
import Button from '../Button/button';
import Input from '../Input/Input';

export default function Header() {
  let searchValue = ''
  const handleSearch = (value) => {
    searchValue = value;
    console.log('searchValue', searchValue)
  }
  

  return (
    <header className="header">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/Zeronet_logo.png" alt="" />
      </div>
      <div>
        <Button>Main</Button>
      </div>
      <div>
        <Button>Sign Up</Button>
      </div>

      <div>
        <Input value={searchValue} onChange={handleSearch} type="text" />
        <Input value={searchValue} onChange={handleSearch} type="text" />
      </div>
    </header>
  )
}

