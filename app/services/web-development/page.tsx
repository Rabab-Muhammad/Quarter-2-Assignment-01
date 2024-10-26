import cssStyle from './web.module.css'

const WebDevelopment = () => {
  return (
    <div className={cssStyle.webContainer}>
        <h1 className={cssStyle.h1}>Website Development</h1>
        <p className={cssStyle.para}>We specialize in creating
        websites that are not only visually appealing but also responsive, fast,
        and user-friendly. Whether you need a simple landing page or a complex
        web application, we bring your ideas to life online.</p>
    </div>
  )
}

export default WebDevelopment