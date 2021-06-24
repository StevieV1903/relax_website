import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';
import {MenuItems} from './MenuItems.js';

const Dropdown = () => {

    const [ click, setClick ] = useState( false )

    const handleClick = () => {
        setClick( !click )
    };

    const getDropdownItem = () => {
        MenuItems.map(( item, index ) => {
            return ( 
                <li key={ index }>
                    <Link to={ item.path } className={ item.className } onClick={ ()=> setClick( false ) }>
                        { item.title }
                    </Link>
                </li>
            )
        })
    };

    return(
        <>
            <ul onClick={ handleClick } className={ click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
            { getDropdownItem()}
            </ul>
        </>
    )

};

export default Dropdown;