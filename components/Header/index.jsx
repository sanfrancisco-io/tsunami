import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logoIcon from '../../assets/logo.svg';
import menu from '../../assets/burger_menu.svg';
import cl from './style.module.scss';


const Header = ({burgerMenu ,setBurgerMenu}) => (
  <div className="container">
    <div className={cl.header}>
      <div className={cl.logo}>
        <Image width={36} src={logoIcon} alt="logo" />
        <h3>
          Tsunami
        </h3>
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
        <button onClick={() => setBurgerMenu(!burgerMenu)} color="primary" className={cl.burger_menu}>
          <Image src={menu} alt="menu" />
        </button>
      </div>
    </div>
  </div>
);

export default Header;
