import React from 'react';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import "./MapSelection.css";
import PropTypes from 'prop-types';

class MapSelection extends React.Component{

    handleSelect(evtKey){
        console.log(evtKey);
    }

    render(){
        console.log(this.props.game);

        let tarkovMaps = (<> 
         <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            {/* TODO: Later Dynamically pull names from DB/Bucket*/}
            <Dropdown.Item location= "/test" >Customs</Dropdown.Item>
            <Dropdown.Item>Shoreline</Dropdown.Item>
            <Dropdown.Item>Woods</Dropdown.Item>
            <Dropdown.Item>Interchange</Dropdown.Item>
        </DropdownButton>
    </div> </>);

        let valorantMaps = (<> 
          <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            <Dropdown.Item>Bind(Blank)</Dropdown.Item>
            <Dropdown.Item>Bind(Callouts)</Dropdown.Item>
            <Dropdown.Item>Haven(Blank)</Dropdown.Item>
            <Dropdown.Item>Bind(Callouts)</Dropdown.Item>
        </DropdownButton></div></>);

        if(this.props.game === "tarkov"){
            return tarkovMaps
        }else if(this.props.game === "valorant"){
            return valorantMaps;
        }else{
            return(<><div><p>"Error in map selection"</p></div></>)
        }
    }
}

MapSelection.propTypes = {
    game: PropTypes.string
};

export default MapSelection;