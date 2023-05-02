import React, { useState, useEffect} from 'react';
import './App.css';
import Robot from './components/Robot'; 
import RobotCollection from './components/RobotCollection';
import RobotCard from './components/RobotCard';
function App() {

  const [isBot, setIsBot] = useState([])
  const [selectedBots, setSelectedBots] = useState([]);


        useEffect(() => {
        fetch("https://json-server-vercel-eight-alpha.vercel.app/bots")
        .then(res => res.json())
        .then(data =>{
            setIsBot(data)
        }
            )
    }, []);
    

    const handleAddBot = (bota) => {
      if (!selectedBots.includes(bota) && selectedBots.length < 4) {
        setSelectedBots([...selectedBots, bota]);
      }
    }
  

      const handleReleaseBot = (bota) => {
        setSelectedBots(selectedBots.filter(bot => bot !== bota));
      }
    

  return (
    <div>
        <Robot selectedBots={selectedBots} 
          handleReleaseBot={handleReleaseBot}/>
        <RobotCollection setIsBot={setIsBot} isBot={isBot} handleAddBot={handleAddBot} handleReleaseBot={handleReleaseBot}/>  
    <RobotCard/>
    </div>
  );
}

export default App;
