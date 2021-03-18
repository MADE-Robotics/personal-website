import React from "react"
import * as styles from './Skills.module.scss';

export default function Skills() {
    return (
      <div id="skills" className={styles.Skills} >
        <h3>Skills</h3>
      <div className={styles.Lists}>
        <div>
        <h4>Languages</h4>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C#</li>
          <li>C++</li>
          <li>R</li>
          <li>MatLab</li>
        </div>

        <div>
        <h4>Libraries/Frameworks</h4>
          <li>React</li>
          <li>React Native</li>
          <li>Django</li>
          <li>GatsbyJS</li>
          <li>Bootstrap</li>
          <li>Express.js</li>
          <li>jQuery</li>

        </div>

        <div>
          <h4>Other</h4>
          <li>AWS</li>
          <li>OAuth</li>
          <li>Firebase</li>
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>PostgreSQL</li>
          <li>TypeScript</li>
          <li>Git</li>
          <li>VS Code</li>
          <li>MVC Architecture</li>
          <li>Unity</li>
          <li>Unreal Engine</li>
          <li>ArcGIS</li>
        </div>
        </div>
       
      </div>
      
  )
}
