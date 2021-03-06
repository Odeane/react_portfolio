import React, { Component } from "react";
import axios from "axios";
import CvCard from "./CvCard";
import { UndrawDashboard } from "react-undraw-illustrations";


class Cv extends Component {

    state = {
        cv: []
    };

    render() {
        const cv = this.state.cv;
        let cvList;

        if (cv.length > 0) {
            cvList = cv.map(cv => {
                return (
                    <div id={'cv-' + cv.id} key={cv.id}>
                        <CvCard cv={cv} />

                    </div>
                );
            });
        }

        return (
            <div className="ui main container">
                <div className="ui stackable two column grid">
                    <div className="column">
                        <p className= 'columncv'><em>Education & Work </em></p>                    
                    </div>
                    <div className="column">
                        <h1 id='cv-header' className="ui header"><span id = 'cv'>CV</span></h1>
                    </div>
                </div>
                <div className="ui stackable four column grid">{cvList}</div>
            </div>
        );
    }
    componentDidMount() {
        axios.get('./src/data/jobs.json')
            .then(response => {
                this.setState({
                    cv: response.data
                })
            })
    }







}



export default Cv;
