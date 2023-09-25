'use client'
import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Styles from '../styles/BackgroundImage.module.css';

export const BackgroundImage = () => {
  const { theme, setTheme } = useTheme();
  const [isImageLoaded, setImageLoaded] = useState(false);

  useEffect(() => { 
    setTimeout(() => { 
      setImageLoaded(true); 
    }, 1000); 
  }, [theme]); 

  const imgBackground = theme === 'dark' ? '/images/bg/bk-black.jpg' : theme === 'light' ? '/images/bg/bk-white.jpg' : '';

  return (
    <>
      {imgBackground && (
        <div
          className={`${Styles['bkImage']} ${isImageLoaded ? Styles['imageLoaded'] : ''}`}
          style={{ backgroundImage: `url(${imgBackground})` }}
        ></div>
      )}
    </>
  );
};