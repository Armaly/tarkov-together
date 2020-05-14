import React from 'react';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import "./MapSelection.css";
import PropTypes from 'prop-types';

class MapSelection extends React.Component{

    handleSelect(eventKey){

        console.log("Handle select");
        console.log(eventKey);

        if(this.props.game === "tarkov"){
            const gameMaps = ["customs-nightshade.jpg",  "factory-3d.jpg", "factory-callouts.jpg", "interchange-nightshade.jpg", "reserve-keys.png", "reserve-spawns.jpg", "shoreline.jpg", "woods-2d.png"];
            console.log("tarkov maps")
        }else if(this.props.game === "valorant"){
            const gameMaps = ["bind-blank.jpg", "bind-callouts.jpg", "haven-blank.jpg", "haven-callouts.jpg"];
           console.log("valorant maps");
        }else{
            return(<><div><p>"Error in map selection"</p></div></>)
        }
    }

    render(){

        let tarkovMaps = (<> 
         <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            {/* TODO: Later Dynamically pull names from DB/Bucket*/}
            <Dropdown.Item onClick={()=>this.handleSelect(1)}>Customs(Nightshade)</Dropdown.Item>
           <Dropdown.Item onClick={()=>this.handleSelect(2)}>Factory(3D)</Dropdown.Item> 
           <Dropdown.Item onClick={()=>this.handleSelect(3)}>Factory(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(4)}>Interchange(Nightshade)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(5)}>Reserve(Keys)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(6)}>Reserve(Spawns)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(7)}>Shoreline</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(8)}>Woods(2D)</Dropdown.Item>
            
        </DropdownButton>
    </div> </>);

        let valorantMaps = (<> 
          <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            <Dropdown.Item onClick={()=>this.handleSelect(1)}>Bind(Blank)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(2)}>Bind(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(3)}>Haven(Blank)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(4)}> Haven(Callouts)</Dropdown.Item>
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