import Link from 'next/link';
import cssStyle from "./page.module.css"

const HomePage = () => {
  return (
    <div>
      <nav className={cssStyle.navContainer}>
      <h1 className={cssStyle.logo}>Code & Craft</h1>
        <ul className={cssStyle.navlist}>
          <li>
            <Link href="./" className={cssStyle.navlink}>Home</Link>
            </li>
          <li>
            <Link href="./about" className={cssStyle.navlink}>About</Link>
          </li>
          <li>
            <Link href="./contact-us" className={cssStyle.navlink}>Contact Us</Link>
          </li>
          <li>
            <Link href="./services" className={cssStyle.navlink}>Services</Link>
          </li>
        </ul>
      </nav>
      <div className={cssStyle.maincontent}>
      <h2 className={cssStyle.heading}>Welcome to Code & Craft!</h2>
          <p className={cssStyle.paragraph}>
            At Code & Craft, we believe in the power of creativity and technology. 
            We specialize in building stunning, responsive websites that not only look great 
            but also deliver exceptional user experiences.
          </p>
          </div>
      </div>
  )
}

export default HomePage;