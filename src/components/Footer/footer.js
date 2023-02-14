import React from 'react'
import classes from './footer.module.css';
import Address from "../../assets/address.png";
import Phone from "../../assets/phone.png";

const footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.innerContainer}>
        <hr></hr>
        <div className={classes.content}>
        <div className={classes.address}>
        <div><img src={Address} alt="icon" /></div>
        <p>2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos, Nigeria.</p>
        </div>
        <div className={classes.loyal}>
            <p>Loyalbaze is almost here.</p>
        </div>
        <div className={classes.call}>
        <div><img src={Phone} alt="icon" /></div>
        <p>+234 903 618 9485</p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default footer