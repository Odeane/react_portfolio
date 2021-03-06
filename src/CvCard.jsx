import React from "react";

const CvCard = ({ cv }) => {



    return (
        <>

            <div class="ui card">
                <div class="image">
                    <img src={cv.image} />
                </div>
                <div class="content">
                    <h3 class="ui header">{cv.name}</h3>
                
                    <div class="description">{cv.position}</div>
                    <p class='date'>{cv.date}</p>
                    
                </div>
            </div>
        </>
    );


};


export default CvCard;