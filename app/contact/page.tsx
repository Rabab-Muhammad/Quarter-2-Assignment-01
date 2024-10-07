import React from 'react'
import cssStyle from "./contact.module.css";

console.log(cssStyle,"cssStyle");


const ContactPage = () => {
  return (
    <div>
        <p className={cssStyle.contact}>This is Contact page.</p>
    </div>
  )
}

export default ContactPage;