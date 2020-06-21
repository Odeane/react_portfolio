import React from 'react';
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
        <UndrawDesignerLife primaryColor='#12283a' height='200px' />
        </div>
        <div class="column">
        <h1 id="about-header" className="ui header">About Me</h1>
        <p>
          My name is Odeane Croney. I am 24 years old and I am currently studying at Craft Academy and I am loving every minute.
        </p>
        </div>
      </div>
    </div>
    );
  };
  
  export default About;