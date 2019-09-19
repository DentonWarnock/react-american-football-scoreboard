//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [scoreHome, setHome] = useState(0); 
  const [scoreAway, setAway] = useState(0); 
  const [quarter, setQuarter] = useState(1); 
  
  const tdHome = () => setHome(scoreHome + 7);
  const fgHome = () => setHome(scoreHome + 3);

  const tdAway = () => setAway(scoreAway + 7);
  const fgAway = () => setAway(scoreAway + 3);

  const nextQuarter = () => setQuarter(quarter < 4 ? quarter + 1 : 1);
  
  function resetBoard() {
    setHome(0);
    setAway(0);
    setQuarter(1);
  } 
  

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{scoreHome}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{scoreAway}</div>
          </div>
        </div>
        <BottomRow quarter={quarter}/>
        {/* <Buttons tdHome={tdHome} fgHome={fgHome} tdAway={tdAway} fgAway={fgAway} nextQuarter={nextQuarter} resetBoard={resetBoard} />>         */}
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={tdHome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={fgHome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={tdAway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={fgAway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="otherButtons">
          <button onClick={resetBoard} className="resetBtn">Reset Board</button>
          <button onClick={nextQuarter} className="quarterBtn">Change Quarter</button>
        </div>
      </section>
    </div>
  );
}

export default App;
