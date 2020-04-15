import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';

class MapSelection extends React.Component{

    render(){
        return(<>
            <DropdownButton id="map-drop-down" title="Map">
                {/* TODO: Later Dynamically pull names from DB/Bucket*/}
                <Dropdown.Item eventKey="1">Customs</Dropdown.Item>
                <Dropdown.Item eventKey="2">Shoreline</Dropdown.Item>
                <Dropdown.Item eventKey="3">Woods</Dropdown.Item>
                <Dropdown.Item eventKey="4">Interchange</Dropdown.Item>
            </DropdownButton>
        </>);
    }
}

export default MapSelection;