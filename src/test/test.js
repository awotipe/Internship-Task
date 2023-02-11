import React from 'react'
import classes from './test.module.css';
import Hero from '../components/hero/hero'
import Header from '../components/Header/Header'
import Section from '../components/section2/section'



const test = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
      <Header/>
        <div className={classes.innerContainer}>
        <div className={classes.hero}>
        <Hero/>
        </div>
        </div>
        </div>
        <Section/>
    </div>
  )
}

export default test