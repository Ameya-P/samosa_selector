import './App.css';
import { useState } from 'react';
import Upgrade from './Upgrade.jsx'

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);
  const [multipler, setMultiplier] = useState(1);

  const updateCount = () => {
    setCounter(counter + multipler);
    setIsActive(true);
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsActive(false);
    }, 600);
  }

  const buyDoubleStuffed = () => {
    if (counter > 10) {
      setMultiplier(2);
      setCounter(counter - 10);
    }
  }

  const buyPartyPack = () => {
    if (counter > 100) {
      setMultiplier(5);
      setCounter(counter - 100);
    }
  }

  const buyFullFeast = () => {
    if (counter > 1000) {
      setMultiplier(10);
      setCounter(counter - 1000);
    }
  }


  return (
    <div className="App">
      <div className="header"></div>
      <h1>Samosa Selector</h1>
      <h2>Count: {counter}</h2>
      <img onClick={updateCount} className={`samosa ${isActive ? 'active' : ''}`} src="src/assets/samosa.png"></img>
      <div className="container">
        <Upgrade name="Double Stuffed 👯‍♀️" description="2x per click" cost="10 samosas" action={buyDoubleStuffed}></Upgrade>
        <Upgrade name="Party Pack 🎉" description="5x per click" cost="100 samosas" action={buyPartyPack}></Upgrade>
        <Upgrade name="Full Feast 👩🏽‍🍳" description="10x per click" cost="1000 samosas" action={buyFullFeast}></Upgrade>
      </div>
    </div>
  )
}

export default App