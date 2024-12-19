import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import {navLinks} from '../constants';
import { logo,logo1, menu, close} from '../assets';

const Navbar = () => {
const [active, setActive] = useState('');
const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-20 bg-primary`}>
  <div className="container mx-auto flex justify-between items-center">
    <Link
      to="/"
      className="flex items-center gap-2"
      onClick={() => {
        setActive("");
        window.scrollTo(0, 0);
      }}
    >
      <img src={logo1} alt="logo" className="w-8 h-8 sm:w-9 sm:h-9 object-contain" />
      <p className="text-white text-base sm:text-lg font-bold flex cursor-pointer">
        Harshavardhan &nbsp;<span className="hidden sm:block">Uphade</span>
      </p>
    </Link>

    <ul className="list-none hidden sm:flex flex-row gap-8">
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? "text-white" : "text-secondary"
          } hover:text-white text-base sm:text-lg font-medium cursor-pointer`}
          onClick={() => setActive(link.title)}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
    </ul>

    <div className="sm:hidden flex flex-1 justify-end items-center">
      <img
        src={toggle ? close : menu}
        alt="menu"
        className="w-7 h-7 object-contain cursor-pointer"
        onClick={() => setToggle(!toggle)}
      />

      <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-[72px] right-4 sm:right-8 mx-4 rounded-xl z-10`}>
        <ul className="list-none flex justify-end items-start flex-col gap-4">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } text-base font-medium cursor-pointer`}
              onClick={() => {
                setToggle(false);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar