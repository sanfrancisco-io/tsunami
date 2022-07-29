import React from 'react';
import Image from 'next/image';
import cl from './style.module.scss';


const CryptoCard = ({img}) => (
  <div className={`${cl.card}`}>
    {img && <Image className={cl.img} width={img.width} height={img.height} src={img.src} alt="card"/>}
  </div>
);

export default CryptoCard;
