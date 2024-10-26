import Link from 'next/link';
import cssStyle from './services.module.css';

const ServicesPage = () => {
  return (
    <div className={cssStyle.servicesContainer}>
      <h1 className={cssStyle.h1}>Our Services</h1>
      <p className={cssStyle.para}>
        At Code & Craft, we offer a range of web development services to help 
        your business thrive online. Here is what we can do for you:
      </p>
    <div className={cssStyle.buttonContainer}>
        <Link href="/services/app-development"className={cssStyle.button}>App Development</Link>
        <Link href="/services/web-development" className={cssStyle.button}>Web Development</Link>
      </div>
    </div>
  )
}

export default ServicesPage;