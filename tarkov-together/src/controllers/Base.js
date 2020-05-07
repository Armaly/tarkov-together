import React from 'react';
import MapSelection from '../components/MapSelection';
import '../controllers/Base.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Customs from "../maps/customs.jpg";

class Base extends React.Component{
    render(){
        
        return(<div className="Base">
        <div className="mapSelection">
            < MapSelection />
        </div>

        <Container fluid>
            <Image src={Customs} fluid />
        </Container>

    </div>);
    }
}

export default Base;