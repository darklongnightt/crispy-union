import React from 'react'
import './Menu.css'
import menu from '../../assets/menu.jpeg'

const Menu = () => {
    return (
        <div className="flex-container">
            <h2>Menu</h2>
            <img src={menu} alt="" className="menu-img"/>
        </div>
    )
}

export default Menu
