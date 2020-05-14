import React from 'react';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import "./MapSelection.css";
import PropTypes from 'prop-types';

//TODO: Dynamically call maps this is just a placeholder
import Customs from "../maps/tarkov/customs-nightshade.jpg";
import Factory from "../maps/tarkov/factory-3d.jpg";
import FactoryCallOuts from "../maps/tarkov/factory-callouts.jpg";
import Interchange from "../maps/tarkov/interchange-nightshade.jpg";
import ReserveKeys from "../maps/tarkov/reserve-keys.png";
import ReserveSpawns from "../maps/tarkov/reserve-spawns.jpg";
import Shoreline from "../maps/tarkov/shoreline.jpeg";
import Woods2D from "../maps/tarkov/woods-2d.png";

import BindBlank from "../maps/valorant/bind-blank.jpg";
import BindCallouts from "../maps/valorant/bind-callouts.jpg";
import HavenBlank from "../maps/valorant/haven-blank.jpg";
import HavenCallouts from "../maps/valorant/bind-callouts.jpg";
import SplitCallouts from  "../maps/valorant/split-callouts.jpg";

class MapSelection extends React.Component{

    handleSelect(eventKey){

        console.log("Handle select");
        console.log(eventKey);

        if(this.props.game === "tarkov"){
            const gameMaps = [Customs, Factory, FactoryCallOuts, Interchange, ReserveKeys, ReserveSpawns, Shoreline, Woods2D];  
            this.setState({currentMap: gameMaps[eventKey]});
            this.forceUpdate();
        }else if(this.props.game === "valorant"){
            const gameMaps = [BindBlank, BindCallouts, HavenBlank, HavenCallouts, SplitCallouts];
            this.setState({currentMap: gameMaps[eventKey]});
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
            <Dropdown.Item onClick={()=>this.handleSelect(0)}>Customs(Nightshade)</Dropdown.Item>
           <Dropdown.Item onClick={()=>this.handleSelect(1)}>Factory(3D)</Dropdown.Item> 
           <Dropdown.Item onClick={()=>this.handleSelect(2)}>Factory(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(3)}>Interchange(Nightshade)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(4)}>Reserve(Keys)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(5)}>Reserve(Spawns)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(6)}>Shoreline</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(7)}>Woods(2D)</Dropdown.Item>
            
        </DropdownButton>
    </div> </>);

        let valorantMaps = (<> 
          <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            <Dropdown.Item onClick={()=>this.handleSelect(0)}>Bind(Blank)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(1)}>Bind(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(2)}>Haven(Blank)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(3)}> Haven(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(4)}> Split(Callouts)</Dropdown.Item>
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