import React from 'react';
import MapSelection from '../components/MapSelection';
import '../controllers/Base.css';

class Base extends React.Component{
    render(){
        
        return(<div className="Base">
        <div className="mapSelection">
            < MapSelection />
        </div>

    </div>);
    }
}

export default Base;