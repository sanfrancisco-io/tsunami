import React from 'react';
import Link from 'next/link';
import cl from './style.module.scss';


const Testnet = () => (
  <div className={`${cl.testnet} container`} id="faq">
    <div className={cl.content}>
      <div className={cl.title}>
        <span>
          Join
          {' '}
        </span>
        <span className={cl.title_blue}>
          Testnet
        </span>
      </div>
      <p className={cl.subtitle}>
        To keep up to date, join our Telegram channel.
      </p>
      <Link href="/">
        <button className={`${cl.btn} btn_primary`}>
          join Telegram
        </button>
      </Link>
    </div>
  </div>
);

export default Testnet;
