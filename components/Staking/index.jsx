import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoIcon from '../../assets/logo.svg';
import cl from './style.module.scss';


const Staking = () => (
  <div className={`${cl.staking} container`} id="staking">
    <div className={cl.content}>
      <h2 className={cl.title}>
        Staking TSN
      </h2>
      <p className={cl.description}>
        Tsunami Exchange is a gamified derivatives market based on a vAMM
        (Virtual Automated Market Maker) concept. It allows creating perpetual
        futures markets with leverage of up to factor of 10.
      </p>
      <div className={cl.actions}>
        <Link href="/">
          <button className={`${cl.btn} btn_primary`}>
            Go by
          </button>
        </Link>
        <Link href="/">
          <button className={`${cl.btn_outlined}`}>
            Learn more
          </button>
        </Link>
      </div>
    </div>
    <div className={cl.staking_logo}>
      <div className={cl.logo}>
        <Image width={200} height={175} src={logoIcon} alt="logos1" />
      </div>
      <p>
        APY
      </p>
      <h2>
        23,19%
      </h2>
    </div>
  </div>
);

export default Staking;
