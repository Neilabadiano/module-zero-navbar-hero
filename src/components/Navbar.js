import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Navbar.css'
import { IconContext } from 'react-icons/lib'


function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     }
    //     else{
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src="/images/MZZZZ.png" alt="My Logo" style={{ height: '60px' }} />&nbsp;
                    MODULE-ZERO
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes/> : <FaBars/>}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            ABOUT
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/graduates' className='nav-links' onClick={closeMobileMenu}>
                            GRADUATES
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to='/contacts' className='nav-links' onClick={closeMobileMenu}>
                            CONTACT US
                        </Link>
                    </li>

            
                </ul>
            </div>
        </div>
        </IconContext.Provider>
    </>
  )
}

export default Navbar