import React from "react";
import close from "../images/close.svg";
import user from "../images/user.svg";
import calender from "../images/calendar.svg";
import Countdown from 'react-countdown';


const Header = ({backgroundImage, title, prizePool, players, startDate}) => {

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render at completed state
      return <p> Sorry, but the competition is over.</p>;
    } else {
      // Render at countdown
      return (
      <span>
        <section className="countDownCard">
        <p className="number double">{days}</p>
        </section>&nbsp; d &nbsp;
        <section className="countDownCard">
        <p className="number double">{hours}</p>
        </section> &nbsp; h &nbsp;
        <section className="countDownCard">
        <p className="number double">{minutes}</p>
        </section> &nbsp; m &nbsp;
        <section className="countDownCard">
        <p className="number double">{seconds}</p>
        </section>
        </span>);
    }
  };

  if (!startDate) {
    return <span>Loading...</span>;
  } 
  
  
	return (
		<div className="header" style={{backgroundImage: `url("${backgroundImage}")`}}>
            <div className="headerContent">
              <img className="close" src={close} alt="close icon"/>
              <h1 className="headerTitle">{title}</h1>
              <div className="timer">
              <h2 className="countDown">Ends &nbsp;&nbsp;
              <Countdown date={Date.now() + 604800000} renderer={renderer}/>
              </h2>
              </div>
              <div className="extraInfo">
                <div className="headerInfo1">
                  <h5>PRIZE POOL</h5>
                  <h3>{prizePool}</h3>
                </div>
                <div className="headerInfo2">
                  <h5>PLAYER</h5>
                  <h3><img src={user} alt="user icon" className="user"/>{` ${players}`}</h3>
                </div>
              </div>
              <h5 className="dateInfo">
                  <img src={calender} alt="calender icon" className="calender"/> 
                  Starts on {startDate[0]} at {startDate[1].split(".")[0]}
              </h5>
              <button className="header-join">JOIN</button>
            </div>
		</div>
	);
}

export default Header;
