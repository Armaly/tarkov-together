import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import "./MapSelection.css";
import MapDisplay from './MapDisplay';

class MapSelection extends React.Component{

    handleSelect(evtKey){
        console.log(evtKey);
    }

    render(){
        return(<div className="mapDropDown">
            <DropdownButton variant= "secondary" id="map-drop-down" title="Map" onSelect={this.handleSelect(eventKey)}>
                {/* TODO: Later Dynamically pull names from DB/Bucket*/}
                <Dropdown.Item location= "/test" eventKey="1">Customs</Dropdown.Item>
                <Dropdown.Item eventKey="2">Shoreline</Dropdown.Item>
                <Dropdown.Item eventKey="3">Woods</Dropdown.Item>
                <Dropdown.Item eventKey="4">Interchange</Dropdown.Item>
            </DropdownButton>
        </div>);
    }
}

export default MapSelection;