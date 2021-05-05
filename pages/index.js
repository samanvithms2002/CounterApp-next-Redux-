import React from 'react';
import styles from '../styles/Home.module.css'
import {connect} from 'react-redux';
import {decrementCounter, incrementCounter, resetCounter} from '../redux/actions/counterActions';


function Home(props) {
  return (
    <>
    <div className={styles.navbar}>
      <div className={styles.description}> 
     Counter App
      </div>
      {/* <div>
      No of items
      </div> */}
    </div>
    <div className={styles.container}>
    
      <h1 className={styles.title}>Hello </h1> 
      <h5 className={styles.meta}>this is a basic counter App made with redux and next</h5>
      <div className={styles.mainItems}>
     
      
      <button className={styles.btn} onClick={props.decrementCounter}>-</button>
      <h1>{props.counter}</h1>
      <button className={styles.btn} onClick={props.incrementCounter}>+</button>
     

      
      </div>
      <button className={styles.reset} onClick={props.resetCounter}>reset</button>
      
    </div>
    </>
  )

}
const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
  resetCounter:resetCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);