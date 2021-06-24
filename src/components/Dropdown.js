import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';
import {MenuItems} from './MenuItems.js';

const Dropdown = ({ onCloseMobileMenu }) => {

    const [ click, setClick ] = useState( false )

    // const handleClick = () => {
    //     setClick( !click )
    // };

    return(
        <>
            <ul 
            onClick={ onCloseMobileMenu } 
            className={ click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                { MenuItems.map(( item, index) => {
                    return(
                        <li key={ index }>
                            <Link
                            className={ item.cName }
                            to={ item.path }
                            onClick={ ()=> setClick( false ) }>
                            { item.title }
                            </Link>
                        </li>
                    )
                })}
            
            </ul>
        </>
    )

};

export default Dropdown;