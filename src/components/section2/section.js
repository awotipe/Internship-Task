import React from "react";
import classes from "./section.module.css";
import Curly from "../../assets/curly.png";
import Footer from '../../components/Footer/footer'

const section = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.text}>
          <h1>Priority Access</h1>
          <img src={Curly} alt="Logo" />
          <p>
            Get ready to revolutionize the way you interact with your customers
            and drive sales with Loyalbaze. Skip the waitlist and get exclusive
            priority access to LoyalBaze. Limited slots available. Please tell
            us a bit about your business and needs and of our consultants will
            be in touch Immediately!
          </p>
        </div>
        <div className={classes.form}>
            <h2>Book a Consultation with us</h2>
        <form className={classes.formGroup}>
          <input type="text" name="user_Name" placeholder="Enter your full name"></input>
          <input type="text"  name="user_Email" placeholder="Enter your work email "></input>
          <input type="text" name="user_Phone" placeholder="Mobile number "></input>
          <input type="text" name="user_Name" placeholder="Company Name"></input>
          <input type="text" name="user_Name" placeholder="Select Country"></input>
          
         
          <div>
            
            <textarea className={classes.formcontrol} name="message"
            placeholder="Drop a message....." required></textarea>
            <br />
            <button>Send Request</button>
          </div>
        </form>
        </div>
      </div>
        <Footer/>
    </div>
  );
};

export default section;
