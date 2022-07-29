import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg';
import cl from './style.module.scss';


const Menu = ({burgerMenu, setBurgerMenu}) => (
  <div onClick={() => setBurgerMenu(!burgerMenu)} className={cl.container}>
    <div onClick={(e) => e.stopPropagation()} className={cl.menu}>
      <div className={cl.logo}>
        <Image width={36} src={logo} alt="logo" />
        <h3>
          Tsunami
        </h3>
        <div onClick={() => setBurgerMenu(false)} className={cl.close}/>
      </div>
      <div className={cl.links}>
        <ul className={cl.links_list}>
          <li>
            <Link href="#about">
              About
            </Link>
          </li>
          <li>
            <Link href="#staking">
              Staking
            </Link>
          </li>
          <li>
            <Link href="#blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#faq">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/" >
              <button className={`${cl.app_btn} btn_primary`}>
                Launch App
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Menu;
