import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './Header.module.scss';

export default function Header() {
    return (
        <header className={styles.Header}>
            <nav>
            
                <li>
                <AnchorLink offset='100' href="#about">About</AnchorLink>
                </li>
                <li>
                <AnchorLink offset='100' href="#projects">Projects</AnchorLink>
                </li>
                <li>
                <AnchorLink offset='100' href="#skills" >Skills</AnchorLink>  
                </li>
                <li>
                <AnchorLink offset='100' href="#contact">Contact</AnchorLink>   
                </li>

        </nav> 
        </header>
  )
}
