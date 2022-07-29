import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../assets/logo.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';
import discord from '../../assets/discord.svg';
import cl from './style.module.scss';


const Footer = () => (
  <div className={`${cl.footer} container`}>
    <div className={cl.logo}>
      <Image width={36} src={logo} alt="logo" />
      <h3>
        Tsunami
      </h3>
    </div>
    <div className={cl.links}>
      <Link href="/">
        <a>
          <Image src={twitter} alt="twitter" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={github} alt="github" />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src={discord} alt="discord" />
        </a>
      </Link>
    </div>
  </div>
);

export default Footer;
