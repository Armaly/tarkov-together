import React from 'react';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import "./MapSelection.css";
import PropTypes from 'prop-types';

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

    constructor(props){
        super(props);
        this.state ={
            ctime: "here"
        }
    }

    componentDidMount(){
        this.setState({hi: "hello"});
    }

    changeMap(map){
        console.log(this.props);
        this.props.updateMap(map);    
    }

    render(){

        console.log(this.props);

        let tarkovMaps = (<> 
         <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            {/* TODO: Later Dynamically pull names from DB/Bucket*/}
            <Dropdown.Item onClick={()=>this.changeMap(Customs)}>Customs(Nightshade)</Dropdown.Item>
           <Dropdown.Item onClick={()=>this.changeMap(Factory)}>Factory(3D)</Dropdown.Item> 
           <Dropdown.Item onClick={()=>this.changeMap(FactoryCallOuts)}>Factory(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(Interchange)}>Interchange(Nightshade)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(ReserveKeys)}>Reserve(Keys)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(ReserveSpawns)}>Reserve(Spawns)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(Shoreline)}>Shoreline</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(Woods2D)}>Woods(2D)</Dropdown.Item>
            
        </DropdownButton>
    </div> </>);

        let valorantMaps = (<> 
          <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            <Dropdown.Item onClick={()=>this.changeMap(BindBlank)}>Bind(Blank)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(BindCallouts)}>Bind(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(HavenBlank)}>Haven(Blank)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(HavenCallouts)}> Haven(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.changeMap(SplitCallouts)}> Split(Callouts)</Dropdown.Item>
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
    game: PropTypes.string,
    updateMap: PropTypes.func
};

export default MapSelection;