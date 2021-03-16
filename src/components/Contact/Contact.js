import React from "react";
import * as styles from './Contact.module.scss';

export default function Contact() {
    return (
      <div id="contact" className={styles.Contact}>
        <h3>Contact Me</h3>
        <address>
            <p>Email: <a href="miraheckmann@gmail.com">miraheckmann@gmail.com</a></p>
        </address>
        </div>
  )
}