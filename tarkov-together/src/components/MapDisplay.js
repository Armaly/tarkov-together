import React from 'react';
import Container from 'react-bootstrap/Container'
import Customs from "../maps/tarkov/customs-nightshade.jpg";
import SplitCallouts from  "../maps/valorant/split-callouts.jpg";
import MapSelection from '../components/MapSelection';
import Image from 'react-bootstrap/Image'
import PropTypes from 'prop-types';

//TO DO: Need to dynamically create image src 
class MapDisplay extends React.Component{

    constructor(props){
        super(props);
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

    render(){

        return(<>
          <div className="mapSelection">
            < MapSelection game={this.props.props.game}/>
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