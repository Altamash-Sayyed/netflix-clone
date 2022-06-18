import React, { useEffect, useState } from 'react'
import './NavBar.css';
const NavBar = () => {

    const [show, handleShow] = useState(false);
    useEffect (() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
      
    }, [])
  return (
    <div className={`navbar ${show && "nav__black"}`}>
    <img 
      className='nav__logo'
         src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
         alt='NETFLIX'
      />
       <img 
       className='nav__avatar'
         src="https://th.bing.com/th/id/OIP.2pbBbZIs5Vo1t0QDbYDMGwHaGD?w=237&h=193&c=7&r=0&o=5&pid=1.7"
         alt='NETFLIX'
      />
    </div>
  )
}

export default NavBar

