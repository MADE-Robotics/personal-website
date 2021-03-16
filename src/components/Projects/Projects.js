import React from "react"
import styles from './Projects.module.scss';

export default function Projects() {
    return (
      <div id="projects" className={styles.Projects}>
        <h3>Projects</h3>

        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Chat-App">Chat App</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/blog-python">Python Dajango Blog</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Territories-client">Territories</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Pokemon-Team-Builder" >Pokemon Team Builder</a>  
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Mars-Real-Estate">Mars Realestate Site</a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href="https://github.com/Mheckmann7/Unity-3rd-Person-Shooter-Game">Unity 3rd Person Shooter Controls</a>
          </li>
          </ul>

      </div>
  )
}