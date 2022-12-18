import React, { useState } from 'react';
import Menu from "../Menu/menu";
import Logo from "../Logo/logo";
import Nav from "../Nav/nav";
import styles from './header.module.scss'

export default function Header() {
    const [isMenuOpened, setIsMenuOpened] = useState(true);

    return (
        <header className={styles.header}>
            <div className={styles.header__inner}>
                <Menu isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
                <Logo />
            </div>
            <Nav isMenuOpened={isMenuOpened} setIsMenuOpened={setIsMenuOpened} />
        </header>
    )
}