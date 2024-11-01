import { AlignJustify, X } from 'lucide-react';
import './style.scss';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-tulfa">
      <div className='container-tulfa'>
        <img src="/assets/images/logo.png" alt="Tulfa Logo" />
        <AlignJustify color='#FFFFFF' size={33} onClick={toggleMenu} style={{ cursor: 'pointer' }} />
      </div>
      {isMenuOpen && (
        <nav className="dropdown-menu">
          <div className="logo-container">
            <img src="/assets/images/logo2.png" alt="Menu Content" className="menu-image" />
            <X color="#151568" size={33} onClick={toggleMenu} className="close-icon" style={{ cursor: 'pointer' }} />
          </div>

          <div className='right-menu-bar'>
            <a href=""></a><a href=""></a><a href=""></a><a href=""></a><a href=""></a>
          </div>
        </nav>
      )}
    </header>
  );
}
