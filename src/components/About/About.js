import React from "react";
import styles from './About.module.scss';
import me from "../../imgs/me.png";

export default function About() {
    return (
        <div id="about" className={styles.About}>
            <h1>MIRA HECKMANN</h1>
            <h2>Full Stack Software Engineer</h2>
            <h6>I'm a full stack Software Engineer with a background in Quality Assurance and Geology  </h6>
            <div>
                <img src={me} alt="me" />
                <p>As a graduate of the General Assembly Software Engineering Immersive, I have a breadth of experience designing and implementing dynamic web applications, including working with React, Express, Python and Django. Recently, I've been working on diving deeper into my understanding of React Native and AWS. I’m most interested in pairing my previous experience as a Geologist with my applications by working on real time geolocation based services. </p>
            </div>
            <div className={styles.Hobbies}>
                <li>DARK MODE ENTHUSIAST</li>
                <li>AMATURE GAME DESIGNER</li>
                <li>CAFFEINE WITHDRAWAL VICTIM</li>
            </div>
        </div >
    )

}