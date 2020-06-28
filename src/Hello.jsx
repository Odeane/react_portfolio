import React from "react";

const Hello = () => {
    return (
        <div className="ui main container">
          {/* <h1 id="hello">Hello World</h1> */}
          <div>
           <h2 class= 'intro'>WELCOME TO <br/>
             <span id = "oc"><strong>ODEANE CRONEY</strong></span> <br/>
              CV / RESUME PORTFOLIO </h2>
          </div>
          <div class = 'loader'>
            <div class = 'loader-inner' >
            <div class = 'loader-inner' ></div>
            </div>
            <div>
             <h1>Javascript/ React native/ Ruby on rails/ HTML & CSS </h1> 
            </div>
            
          </div>
        </div>
      );
};

export default Hello;