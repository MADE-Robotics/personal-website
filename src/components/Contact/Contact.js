import React from "react";
import * as styles from './Contact.module.scss';

export default function Contact() {
    return (
      <div id="contact" className={styles.Contact}>
        <h3>Contact Me</h3>
        <p>I am currently seeking new opportunities!</p>
        <p>Located in Boston, MA or Remote</p>
        <address>
          <p>Email: miraheckmann@gmail.com</p>
        </address>

      </div>
  )
}