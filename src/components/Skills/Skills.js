import React from "react"
import * as styles from './Skills.module.scss';

export default function Skills() {
    return (
      <div id="skills" className={styles.Skills}>
        <h3>Skills</h3>
        <h4>Languages</h4>
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C#</li>
        </ul>
        <h4>Libraries/Frameworks</h4>
        <ul>
          <li>React</li>
          <li>React Native</li>
          <li>Django</li>
          <li>GatsbyJS</li>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>jQuery</li>
        </ul>
        <h4>Other</h4>
        <ul>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>PostgreSQL</li>
          <li>TypeScript</li>
          <li>Git</li>
          <li>VS Code</li>
          <li>MVC Architecture</li>
          <li>Unity</li>
          <li>Unreal Engine</li>
        </ul>
       
       
      </div>
      
  )
}