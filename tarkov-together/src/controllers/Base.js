import React from 'react';
import '../controllers/Base.css';
import GameSelection from '../components/GameSelection';


class Base extends React.Component{
    render(){
        
        return(<div className="Base">
      
       <GameSelection />

    </div>);
    }
}

export default Base;