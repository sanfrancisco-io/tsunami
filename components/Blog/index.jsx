import React from 'react';
import Image from 'next/image';
import arrow from '../../assets/arrow.svg';
import cl from './style.module.scss';


const Blog = () => (
  <div className={`${cl.blog} container`} id="blog">
    <h2 className={cl.title}>
      Blog
    </h2>
    <div className={cl.content}>
      <div className={cl.main}>
        <h2>
          Introducing Virtual AMM
        </h2>
        <p>
          About Introducing Virtual AMM
        </p>
        <div className={cl.main_arrow}>
          <Image src={arrow} alt={arrow} />
        </div>
      </div>
      <div className={cl.another}>
        <div className={cl.item}>
          <div className={cl.item_arrow}>
            <Image src={arrow} alt={arrow} />
          </div>
          <h2>
            Introducing Perpetual Futures
          </h2>
          <p>
            About Introducing Perpetual Futures
          </p>
        </div>
        <div className={cl.item}>
          <div className={cl.item_arrow}>
            <Image src={arrow} alt={arrow} />
          </div>
          <h2>
            Introducing Perpetual Futures
          </h2>
          <p>
            About Introducing Perpetual Futures
          </p>
        </div>
        <div className={cl.item}>
          <div className={cl.item_arrow}>
            <Image src={arrow} alt={arrow} />
          </div>
          <h2>
            Introducing Perpetual Futures
          </h2>
          <p>
            About Introducing Perpetual Futures
          </p>
        </div>
      </div>
    </div>

  </div>
);

export default Blog;
