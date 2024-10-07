import React from 'react'
import cssStyle from './features.module.css';

console.log(cssStyle,"cssStyle");


const FeaturesPage = () => {
  return (
    <div>
        <p className={cssStyle.features}>This is Features page.</p>
    </div>
  )
}

export default FeaturesPage;