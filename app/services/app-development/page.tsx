import React from 'react'
import cssStyle from "./app.module.css"

console.log(cssStyle,"cssstyle");


const AppDevelop = () => {
  return (
    
    <div className={cssStyle.appContainer}>

        <h1 className={cssStyle.h1}>App Development</h1>
        <p className={cssStyle.para}>In todays digital landscape, an app is essential for connecting with
        users anytime, anywhere. Our app development services offer tailored
        solutions to bring your unique vision to life, whether for iOS, Android,
        or cross-platform.</p>
    </div>
  )
}

export default AppDevelop;