import React from 'react';
import Container from 'react-bootstrap/Container'
import MapSelection from '../components/MapSelection';
import Image from 'react-bootstrap/Image'
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

//TO DO: Need to dynamically create image src 
class MapDisplay extends React.Component{

    constructor(props){
        super(props);
        this.updateMap = this.updateMap.bind(this);
        this.state ={
            currentMap: "here"
        }
    }

    componentDidMount () {
        if(this.props.props.game === "tarkov"){
            console.log("Default map tarkov");
            this.setState({currentMap: Customs});

        }else if(this.props.props.game === "valorant"){
            this.setState({currentMap: SplitCallouts});
        }
    }

    updateMap(map){
        this.setState({currentMap: map});
    }

    handleUpdate(eventKey){

        console.log("Handle select");
        console.log(eventKey);

        if(this.props.game === "tarkov"){
            const gameMaps = [Customs, Factory, FactoryCallOuts, Interchange, ReserveKeys, ReserveSpawns, Shoreline, Woods2D];  
           this.setState({currentMap: gameMaps[eventKey]});
            console.log(this.state);
        }else if(this.props.game === "valorant"){
            const gameMaps = [BindBlank, BindCallouts, HavenBlank, HavenCallouts, SplitCallouts];
            this.setState({currentMap: gameMaps[eventKey]});
        }else{
            return(<><div><p>"Error in map selection"</p></div></>)
        }
    }
    render(){
        return(<>
          <div className="mapSelection">
            < MapSelection game={this.props.props.game} updateMap={this.updateMap}/>
        </div>
        
        <br></br>
        <Container fluid>
            <Image src={this.state.currentMap} fluid />
        </Container>
        </>);
    }
}

MapDisplay.propTypes = {
    game: PropTypes.string
};

export default MapDisplay;