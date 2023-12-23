import React from 'react';

import Social from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header classname='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div classname='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* Logo */}
        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='' />
        </Link>
        {/* nav - initially hidden - show on sktop mode */}
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to={'/home'}className='text-[#696c6d] hover:text-primary transition'>Home</Link>
          <Link to={'/about'}className='text-[#696c6d] hover:text-primary transition'>About</Link>
          <Link to={'/contact'}className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
          <Link to={'/portfolio'}className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
        </nav>
      </div>
      {/* socials */}
      <Social />
      {/* mobile nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
