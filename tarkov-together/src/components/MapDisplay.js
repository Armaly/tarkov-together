import React from 'react';
import Container from 'react-bootstrap/Container'
import Customs from "../maps/tarkov/customs-nightshade.jpg";
import MapSelection from '../components/MapSelection';
import Image from 'react-bootstrap/Image'

class MapDisplay extends React.Component{

    render(){
        return(<>
          <div className="mapSelection">
            < MapSelection />
        </div>

        <br></br>
        <Container fluid>
            <Image src={Customs} fluid />
        </Container>
        </>);
    }
}

export default MapDisplay;