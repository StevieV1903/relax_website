import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.js';
// import relaxELLogo from '../assets/relaxELLOGO.png';
import relaxELLogo from '../assets/relax_logo_transparent.png';


const Navbar = () => {

    const [ click, setClick ] = useState( false );
    const [ dropdown, setDropdown ] = useState( false );
    const [ isNavbarActive, setIsNavbarActive] = useState( false );

    const handleClick = () => {
        setClick( !click )
    };

    const closeMobileMenu = () => {
        setClick( false )
    };

    const extendElement = () => {
        dropdown ? setDropdown( false ) : setDropdown( true );
      }

    const onMouseEnter = () => {
        if( window.innerWidth < 960 ) {
            setDropdown( false )
        } else {
            setDropdown( true )
        }
    };

    const onMouseLeave = () => {
        if( window.innerWidth < 960 ) {
            setDropdown( false )
        } else {
            setDropdown( false )
        }
    };

    const changeNavbarBackground = () => {
        if( window.scrollY >= 80 ) {
            setIsNavbarActive( true )
        } else {
            setIsNavbarActive( false )
        }
    };

    window.addEventListener( 'scroll', changeNavbarBackground )




return(
        <>
            <nav className={ isNavbarActive ? "navbar active" : "navbar" }>
            <Link to="/" className="navbar-logo">
                <img src={ relaxELLogo } className='navbar-logo' alt="relax east lothian" />
            </Link>

            <div className="menu-icon" onClick={ handleClick }>
                <i className={ click ? 'fas fa-times' : 'fas fa-bars' } />
            </div>

            <ul className={ click ? 'nav-menu active' : 'nav-menu' }>

                <li className="nav-item">
                    <Link to='/' className="nav-links" onClick={ closeMobileMenu }>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/about' className="nav-links" onClick={ closeMobileMenu }>
                        About
                    </Link>
                </li>
                <li className="nav-item"
                        onMouseEnter={ onMouseEnter }
                        onMouseLeave={ onMouseLeave }
                        onClick={extendElement}
                        >
                    <Link to='#' className="nav-links" 
                    // onClick={ closeMobileMenu }
                    >
                        Services <i className='fas fa-caret-down' />
                    </Link>

                    { dropdown && <Dropdown onCloseMobileMenu={ closeMobileMenu } />}
                </li>

                <li className="nav-item">
                    <Link to='/gallery' className="nav-links" onClick={ closeMobileMenu }>
                        Gallery
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to='/contact' className="nav-links" onClick={ closeMobileMenu }>
                        Contact
                    </Link>
                </li>
                
            </ul>
        </nav>
      
        </>
  );
}

export default Navbar;






        


