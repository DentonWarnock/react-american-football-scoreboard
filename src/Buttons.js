import React from "react";
import "./App.css";

const Buttons = (props) => {
  return (
    <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={props.tdHome} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={props.fgHome} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={props.tdAway} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={props.fgAway} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
        <div className="otherButtons">
          <button onClick={props.resetBoard} className="resetBtn">Reset Board</button>
          <button onClick={props.nextQuarter} className="quarterBtn">Change Quarter</button>
        </div>
      </section>
  ); 
};

export default Buttons;