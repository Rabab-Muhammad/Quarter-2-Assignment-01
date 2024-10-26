import cssStyle from "./about.module.css";

function AboutPage() {
  return (
    <div className={cssStyle.aboutContainer}>
      <h1 className={cssStyle.h1}>About Code & Craft</h1>
      <p className={cssStyle.para}>
        At Code & Craft, we are passionate about building beautiful and
        functional websites. Our mission is to help businesses establish a
        strong online presence through innovative web solutions.
      </p>
    </div>
  );
}

export default AboutPage;
