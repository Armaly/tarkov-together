import React from 'react';
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown';
import "./MapSelection.css";
import PropTypes from 'prop-types';


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
    render(){
        var handleUpdate = this.props.handleUpdate;

        console.log(this.props);

        let tarkovMaps = (<> 
         <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            {/* TODO: Later Dynamically pull names from DB/Bucket*/}
            <Dropdown.Item onClick={()=>this.props.handleUpdate(0)}>Customs(Nightshade)</Dropdown.Item>
           <Dropdown.Item onClick={()=>this.props.handleUpdate(1)}>Factory(3D)</Dropdown.Item> 
           <Dropdown.Item onClick={()=>this.props.handleUpdate(2)}>Factory(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(3)}>Interchange(Nightshade)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(4)}>Reserve(Keys)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(5)}>Reserve(Spawns)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(6)}>Shoreline</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(7)}>Woods(2D)</Dropdown.Item>
            
        </DropdownButton>
    </div> </>);

        let valorantMaps = (<> 
          <Button href="/" variant="secondary">Home</Button>
        <div className="mapDropDown">
        <DropdownButton variant= "secondary" id="map-drop-down" title="Map">
            <Dropdown.Item onClick={()=>this.props.handleUpdate(0)}>Bind(Blank)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(1)}>Bind(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(2)}>Haven(Blank)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(3)}> Haven(Callouts)</Dropdown.Item>
            <Dropdown.Item onClick={()=>this.props.handleUpdate(4)}> Split(Callouts)</Dropdown.Item>
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
    handleUpdate: PropTypes.func
};

export default MapSelection;