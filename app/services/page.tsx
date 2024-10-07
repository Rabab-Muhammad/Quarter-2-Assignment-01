import React from 'react'
import cssStyle from './services.module.css';

console.log(cssStyle,"cssStyle");


const ServicesPage = () => {
  return (
    <div>
        <p className={cssStyle.services}>This is Services page.</p>
    </div>
  )
}

export default ServicesPage;