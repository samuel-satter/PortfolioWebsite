import React from "react";
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {ImBook} from 'react-icons/im'
import {TbMessage} from 'react-icons/tb'
import {useState} from 'react'
import {GoLightBulb} from 'react-icons/go'

const Nav = () => {
    const[activeNav, setActiveNav] = useState('#')

    return (
       <nav>
           {generateAnchor(activeNav, setActiveNav, <AiFillHome/>,'#')}
           {generateAnchor(activeNav, setActiveNav, <AiOutlineUser/>,'#about')}
           {generateAnchor(activeNav, setActiveNav, <ImBook/>,'#experience')}
           {generateAnchor(activeNav, setActiveNav, <TbMessage/>,'#contact')}
           <a id='light-mode-toggle' onClick='toggleLightMode()'><GoLightBulb/></a>
       </nav>
    )
}

function toggleLightMode() {
    document.body.classList.toggle('light-mode')
}
const generateAnchor = (activeNav, setActiveNav, Component, Link) => {
    return (
        <a href={Link} onClick={() => {setActiveNav(Link)}} className={activeNav === Link ? 'active' : ''}>{Component}</a>
    )
}
export default Nav