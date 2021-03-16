import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.Header}>
            <nav>
            <ul>
                <li>
                <AnchorLink href="#about">About</AnchorLink>
                </li>
                <li>
                <AnchorLink href="#projects">Projects</AnchorLink>
                </li>
                <li>
                <AnchorLink href="#skills" >Skills</AnchorLink>  
                </li>
                <li>
                <AnchorLink href="#contact">Contact</AnchorLink>   
                </li>
            </ul>

        </nav> 
        </header>
  )
}
