import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import discord from '../../assets/discord.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';
import cl from './style.module.scss';


const About = () => (
  <div className="container">
    <div className={`${cl.about} about`} id="about">
      <div className={cl.content}>
        <div className={cl.title}>
          <p className={cl.title_blue}>
            Tsunami
          </p>
          <p>
            Exchange
          </p>
        </div>
        <p className={cl.subtitle}>
          Gamified Derivatives Market.
        </p>
        <Link href="/">
          <button className={`${cl.btn} btn_primary`}>
            Start now
          </button>
        </Link>
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
  </div>
);

export default About;
