import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Tarkov from "../logos/tarkov-logo.jpg";
import Valorant from "../logos/Valorant-logo.png";
import MapDisplay from "../components/MapDisplay";
import { Link } from 'react-router-dom';

class GameSelection extends React.Component{

    render(){
        return(<>
            <CardGroup>
              
              <Link to={{pathname:"/tarkov", state:{game:"tarkov"} }}>
                <Card>
                    <Card.Img src={Tarkov} />
                </Card>
               </Link>
                <Card>
                    <Card.Img src={Valorant} />
                </Card>
            </CardGroup>
        </>);
    }
}

export default GameSelection;