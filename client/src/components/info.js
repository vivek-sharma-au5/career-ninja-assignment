import React from "react";
import "../App.css";

const Dialer = ({ displayData, strength, image, loading, error }) => {
  const { name } = displayData;

  return (
    <div className='the-info'>
      <div className='col-12'>
        <div className='error-loading'>
          {loading ? (
            <div className='col-4 offset-2 mt-3' style={{ color: "#212121" }}>
              <h1>Loading...</h1>
            </div>
          ) : (
            <div></div>
          )}
          {error ? (
            <div className='col-8 offset-1 mt-3' style={{ color: "red" }}>
              <h3>Invalid Code !!! Please Enter a valid code</h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className='profile-row'>
          <div className='col-3 img-div'>
            {image ? (
              <div>
                <img src={image} alt='' width='300' height='380' />
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className='col-6 dtl-div'>
            <div className='col-12 ml-1'>{name}</div>

            {strength ? (
              <div className='col-12'>
                <ul>
                  <li>
                    intelligence -<span>{strength.intelligence}</span>{" "}
                  </li>
                  <li>
                    strength - <span>{strength.strength}</span>
                  </li>
                  <li>
                    speed - <span>{strength.speed}</span>
                  </li>
                  <li>
                    durability - <span>{strength.durability}</span>
                  </li>
                  <li>
                    power - <span>{strength.power}</span>
                  </li>
                  <li>
                    combat - <span>{strength.combat}</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialer;
