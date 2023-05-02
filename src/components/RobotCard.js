import React from "react";

function RobotCard({image, title, catchphrase, health, damage, armor}){

    const divCardStyle = {
        width: '14rem'
      }

    return(
        <div className="card p-1 m-2 bg-primary" style={divCardStyle}>
            <img className="img card-img-top" src={image} alt="Not found"/>
            <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <small className="card-text">{catchphrase}</small>
            </div>
            
        </div>
    )
}

export default RobotCard;