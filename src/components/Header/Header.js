import React from 'react'
import Logo from  '../../images/prothom-alo-logo.svg'
import './Header.css'

function Header() {
  return (
    <header>
        <div className='logoContainer'>
            <a href='/'>
                <h2>
                    <img src={Logo} alt='Prothom Alo Logo'/>
                </h2>
            </a>
        </div>
        <div className='borderLine'></div>
    </header>
  )
}

export default Header