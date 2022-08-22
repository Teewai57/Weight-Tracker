import React from 'react';
import "./Contact.css";
import {MdOutlineEmail} from "react-icons/md"
import {FaLinkedin} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>bobtoyoabasi@gmail.com</h5>
            <a href="mailto:bobtoyoabasi@gmail.com"  target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <FaLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Toyoabasi Bob</h5>
            <a href="https://ng.linkedin.com/in/toyoabasi-bob-9835a7245?trk=people-guest_people_search-card" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+2348162340257</h5>
            <a href="https://api.whatsapp.com/send?phonenumber+2348162340257" target="_blank">Send a message</a>
          </article>
        </div>
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact
