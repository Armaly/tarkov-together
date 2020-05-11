import React from 'react';
import Container from 'react-bootstrap/Container'
import Customs from "../maps/tarkov/customs-nightshade.jpg";
import MapSelection from '../components/MapSelection';
import Image from 'react-bootstrap/Image'
import PropTypes from 'prop-types';

class MapDisplay extends React.Component{

    render(){
        console.log(this.props);
        console.log(this.props.props.game);
        return(<>
          <div className="mapSelection">
            < MapSelection game={this.props.props.game}/>
        </div>

        <br></br>
        <Container fluid>
            <Image src={Customs} fluid />
        </Container>
        </>);
    }
}

MapDisplay.propTypes = {
    game: PropTypes.string
};

export default MapDisplay;