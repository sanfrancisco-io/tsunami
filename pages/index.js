import Head from 'next/head';
import {memo, useMemo, useState} from 'react';
import cl from '../styles/Home.module.scss';
import Header from '../components/Header';
import About from '../components/About';
import CardList from '../components/CardList';
import Statistics from '../components/Statistics';
import Staking from '../components/Staking';
import Blog from '../components/Blog';
import Testnet from '../components/Testnet';
import Footer from '../components/Footer';
import Menu from '../components/Menu';


export default function Home() {
  
  const [burgerMenu, setBurgerMenu] = useState(false);
  
  return (
    <>
      <Head>
        <title>
          Tsunami
        </title>
        <link rel="shortcut icon" href="/logo.svg" />
      </Head>

      <main className={cl.main}>
        <div className={cl.container}>
          <Header burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu}/>
          {useMemo(()=>(
            <>
              <About />
              <CardList />
              <Statistics />
              <Staking />
              <Blog />
              <Testnet />
              <Footer />
            </>
          ), [])}
          { burgerMenu && <Menu burgerMenu={burgerMenu} setBurgerMenu={setBurgerMenu} />}
        </div>
      </main>
    </>
  )
};
