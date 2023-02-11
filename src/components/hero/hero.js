import React from "react";
import classes from "./hero.module.css";
import LogoG from "../../assets/g.png";
import LogoO from "../../assets/o.png";
import LogoU from "../../assets/u.png";
import LogoM from "../../assets/m.png";

const hero = () => {
  return (
    <div className={classes.container}>
      <h1 data-aos="fade-down"
          data-aos-duration="3000">
        Turn your best customers into <span>Loyal fans</span>
      </h1>
      <p data-aos="fade-up"
         data-aos-duration="3000">
        Loyalbaze, empowers businesses to offer digital, mobile-first loyalty
        programs to their customers. With our AI Powered platform, you can
        easily create and manage custom loyalty and rewards programs, track
        customer engagement, and gain valuable insights to improve your
        business. Sign up now to get early access.
      </p>
      <div className={classes.form}>
        <form className={classes.formTwo}>
          <input className={classes.input1}
            type="text"
            name="user_Name"
            placeholder="Tell us your name"
          ></input>
          <input className={classes.input2}
            type="text"
            name="user_Email"
            placeholder="Enter your email address "
          ></input>
          <div>
            <button className={classes.btn}>Get early access</button>
          </div>
        </form>
        <div className={classes.joined}>
          <div className={classes.images}>
            <img src={LogoG} alt="Logo" />
            <img src={LogoO} alt="Logo" />
            <img src={LogoU} alt="Logo" />
            <img src={LogoM} alt="Logo" />
          </div>
          <div className={classes.text}>
          <p>+57 Joined</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
