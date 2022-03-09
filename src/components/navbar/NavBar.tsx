import React, { useState } from 'react';
import styles from './NavBar.module.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import logo from '../../assets/logo.svg';

export default function NavBar() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const MenuLinks: React.FC = () => {
    return (
      <>
        <p>
          <a href='#home'>Home</a>
        </p>
        <p>
          <a href='#wgpt3'>What is GPT3?</a>
        </p>
        <p>
          <a href='#possibility'>Open AI</a>
        </p>
        <p>
          <a href='features'>Case studies</a>
        </p>
        <p>
          <a href='#blog'>Library</a>
        </p>
      </>
    );
  };

  const toggleMenuHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <div className={styles.gpt3__navbar}>
      <div className={styles['gpt3__navbar-links']}>
        <div className={styles['gpt3__navbar-links_logo']}>
          <img src={logo} alt='logo' />
        </div>
        <div className={styles['gpt3__navbar-links_container']}>
          <MenuLinks />
        </div>
      </div>
      <div className={styles['gpt3__navbar-sign']}>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className={styles['gpt3__navbar-menu']}>
        {toggleMenu ? (
          <RiCloseLine color='#fff' size={27} onClick={toggleMenuHandler} />
        ) : (
          <RiMenu3Line color='#fff' size={27} onClick={toggleMenuHandler} />
        )}
        {toggleMenu && (
          <div
            className={`${styles['gpt3__navbar-menu_container']} scale-up-center`}
          >
            <div className={styles['gpt3__navbar-menu_container-links']}>
              <MenuLinks />
            </div>
            <div className={styles['gpt3__navbar-menu_container-links-sign']}>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
