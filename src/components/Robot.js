import React from "react";
import RobotCard from "./RobotCard";


function Robot({selectedBots = [], handleReleaseBot}){



    

    return(
        <div className="army container-fluid row bg-success" >
            <h2>Bot Bottlr</h2>
            {selectedBots.map(bot => (
              <div className="col-sm-3 mb-4 mb-sm-0 " onClick={() => handleReleaseBot(bot)}>
              <RobotCard image={bot.avatar_url} title={bot.name} catchphrase={bot.catchphrase} health={bot.health} damage={bot.damage} armor={bot.armor}  />
              </div>
            ))}
        </div>
    )
}

export default Robot;