import React from 'react'
import style from "./Contact.module.css"

export default function Contact() {
  return (
    <div id={style.top}>
    <div className={style.container}>
      <h1 className={style.h1}>Contact Us</h1>
      <p className={style.p}>we're improving suggest us something that can motivate us.</p>
      <form action='https://formsubmit.co/gs8828256+formsubmit@email.com' method='POST'>
        <div className={style.formGroup}>
          <label>Name</label>
          <input type="text" placeholder="Your name" required />
        </div>
        <div className={style.formGroup}>
          <label>Email</label>
          <input type="email" placeholder="your@email.com" required />
        </div>
        <div className={style.formGroup}>
          <label>Message</label>
          <textarea placeholder="Your message here..." required></textarea>
        </div>
        <input type="submit" id={style.buttonContact}>Send Message</input>
      </form>
    </div>
    </div>
  )
}
