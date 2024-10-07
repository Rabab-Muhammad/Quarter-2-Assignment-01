import React from 'react'
import cssStyle from './about.module.css';

console.log(cssStyle,"cssStyle");


function AboutPage() {
  return (
    <div>
        <p className={cssStyle.about}>This is About page.</p>
    </div>
  )
}

export default AboutPage;
