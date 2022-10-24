import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {BsSnapchat} from 'react-icons/bs'



const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/william-vera-rincon-a5bb31249/" target = "_blank"><BsLinkedin/></a>
        <a href="https://github.com/verawill?tab=overview&from=2022-09-01&to=2022-09-30" target = "_blank"><AiFillGithub/></a>
        <a href="https://t.snapchat.com/otFVP1jh" target = "_blank"><BsSnapchat/></a>
    </div>
  )
}

export default HeaderSocials