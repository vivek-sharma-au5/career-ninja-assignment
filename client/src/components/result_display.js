import React from "react";
import "../App.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ResultsDisplay extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='main-row'>
        {this.props.battles.map((elem, i) => (
          <div key={i} className='elem'>
            <div className='heading1'>
              <h2>{elem.name}</h2>
              <ul id='battle-details'>
                <li>Region - {elem.region}</li>
                <li>Location - {elem.location}</li>
                <li>Year - {elem.year}</li>
                <li>Type - {elem.battle_type}</li>
                <li>Battle No.{elem.battle_number}</li>
              </ul>
            </div>
            <div className='data-div'>
              <div className='king1'>
                <img
                  className='k-img'
                  src='https://api.time.com/wp-content/uploads/2016/04/jon-snow-game-of-thrones.jpeg?w=500&quality=85'
                  alt=''
                />
                <div className='inner-content-atc'>
                  <img
                    src='https://api.time.com/wp-content/uploads/2016/04/jon-snow-game-of-thrones.jpeg?w=500&quality=85'
                    alt=''
                  />
                  <div className='names'>
                    <div className='king-name'>
                      <h4>{elem.attacker_king}</h4>
                    </div>
                    <div>
                      <ul>
                        <li style={{ color: "crimson" }}>ATTACKERS</li>
                        <li>House - {elem.attacker_1}</li>
                        <li>Commander - {elem.attacker_commander}</li>
                        <li>Army Size - {elem.attacker_size} </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className='king2'>
                <img
                  className='k-img'
                  src='https://static-ssl.businessinsider.com/image/5707ecbb52bcd01d7b8bb631-717-538/ramsay-bolton-house-stark-37001920-2000-1331.jpg'
                  alt=''
                />
                <div className='inner-content-def'>
                  <div>
                    <img
                      src='https://static-ssl.businessinsider.com/image/5707ecbb52bcd01d7b8bb631-717-538/ramsay-bolton-house-stark-37001920-2000-1331.jpg'
                      alt=''
                    />
                  </div>
                  <div className='names'>
                    <div className='king-name'>
                      <h4>{elem.defender_king}</h4>
                    </div>
                    <div>
                      <ul>
                        <li style={{ color: "green" }}>DEFENDERS</li>
                        <li>House - {elem.defender_1}</li>
                        <li>Commander - {elem.defender_commander}</li>
                        <li>Army Size - {elem.defender_size}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const getDataFromRedux = (state) => {
  console.log("in display", state.battles.all_battles);
  return {
    battles: state.battles.search_results,
  };
};

const giveDataToRedux = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(getDataFromRedux, giveDataToRedux)(ResultsDisplay);
