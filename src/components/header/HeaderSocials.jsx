import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/samuel-sätter-8384ab264/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/samuel-satter" target="_blank" rel="noreferrer"><BsGithub/></a>
        </div>

    )
}
export default HeaderSocials