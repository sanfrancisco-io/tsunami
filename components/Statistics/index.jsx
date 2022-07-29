import React from 'react';
import Image from 'next/image';
import lock from '../../assets/lock.svg';
import cl from './style.module.scss';


const Statistics = () => (
  <div className="container">
    <div className={cl.stats}>
      <div className={cl.item}>
        <Image src={lock} alt="lock" />
        <h2 className={cl.value}>
          1 000 000
        </h2>
        <p className={cl.title}>
          Total value locked (TVL)
        </p>
      </div>
      <div className={cl.item}>
        <Image src={lock} alt="lock" />
        <h2 className={cl.value}>
          2 635 287
        </h2>
        <p className={cl.title}>
          Volume 24h
        </p>
      </div>
      <div className={cl.item}>
        <Image src={lock} alt="lock" />
        <h2 className={cl.value}>
          23,23%
        </h2>
        <p className={cl.title}>
          Staking rewards
        </p>
      </div>
    </div>
  </div>
);

export default Statistics;
