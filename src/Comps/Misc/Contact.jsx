import React from 'react'
import style from "./Contact.module.css"

export default function Contact() {
  return (
    <div id={style.top}>

    <div className={style.container}>
      <h1 className={style.h1}>Contact Us</h1>
      <p className={style.p}>we're improving suggest us something that can motivate us.</p>
      <form>
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
        <button type="submit" id={style.buttonContact}>Send Message</button>
      </form>
    </div>
    </div>
  )
}
