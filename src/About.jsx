import React from 'react';
import { UndrawBusinessman } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawBusinessman
            primaryColor= 'white'
            height='250px'
          />
        </div>
        <div class="column">
        <h1 id="about-header" className="ui header"> <span id= "aboutHead">About Me</span></h1>
        <p>
            My name is Odeane Croney. I am a Full Stack Developer based in Stockholm.
        </p>
          <div>
            <h1>Skills</h1>

            <ul>
              <li>Git and Github</li>
              <li>Test and Behavior Driven Development</li>
              <li>React and Native React</li>
              <li>Agile Approach and Practices</li>
            </ul>
          </div>
          
          
        </div>
      </div>
    </div>
    );
  };
  
  export default About;