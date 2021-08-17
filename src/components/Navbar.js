import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown.js';

const Navbar = () => {

    const [ click, setClick ] = useState( false );
    const [ dropdown, setDropdown ] = useState( false );

    const handleClick = () => {
        setClick( !click )
    };

    const closeMobileMenu = () => {
        setClick( false )
    };

    const extendElement = () => {
        dropdown ? setDropdown(false) : setDropdown(true);
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


    return(
        <>
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                <i className='fab fa-r-project'/>
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
                    <Link to='/contact' className="nav-links" onClick={ closeMobileMenu }>
                        Contact
                    </Link>
                </li>
                
            </ul>
        </nav>
        </>
    )

};

export default Navbar;

