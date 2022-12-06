import '../styles/Header.css';

const Header = ({ children }) => {
  return (
    <header className='page-header'>
      <nav className='header--nav'>
        <div id='hamburger'>
          <input
            type='checkbox'
            className='burger-checkbox'
            // onChange={() => {
            //   if (isMenuOpen) setMenuOpen(false);
            //   else setMenuOpen(false);
            // }}
          />
          <span className='burger-span'></span>
          <span className='burger-span'></span>
          <span className='burger-span'></span>
        </div>
        <a href='http://localhost:3000/' className='nav-brand'>
          React Modal
        </a>
      </nav>
    </header>
  );
}

export default Header;