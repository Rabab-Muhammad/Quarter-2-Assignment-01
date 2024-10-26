import cssStyle from "./contact-us.module.css"

const ContactUs = () => {
  return (
    <div className={cssStyle.contactContainer}>
        <h1 className={cssStyle.h1}>Contact Us</h1>
      <p className={cssStyle.para}>
        We are here to help! If you have any questions, feel free to reach out.
      </p>
    </div>
  )
}

export default ContactUs
