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
            console.log("tarkov maps")
        }else if(this.props.game === "valorant"){
           console.log("valorant maps");
        }else{
            return(<><div><p>"Error in map selection"</p></div></>)
        }
    }

    render(){
        console.log(this.props.game);

        let tarkovMaps = (<> 
         <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            {/* TODO: Later Dynamically pull names from DB/Bucket*/}
            <Dropdown.Item onClick={()=>this.handleSelect(1)}>Customs</Dropdown.Item>
           <Dropdown.Item onClick={()=>this.handleSelect(2)}>Interchange</Dropdown.Item> 
           <Dropdown.Item onClick={()=>this.handleSelect(3)}>Shoreline</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.handleSelect(4)}>Woods</Dropdown.Item>
            
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