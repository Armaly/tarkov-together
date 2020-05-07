import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Tarkov from "../logos/tarkov-logo.jpg";
import Valorant from "../logos/Valorant-logo.png";
import MapDisplay from "../components/MapDisplay";

class GameSelection extends React.Component{

    render(){
        return(<>
            <CardGroup>
              
              <a style={{ cursor: 'pointer' }} onClick={<MapDisplay />}>
                <Card>
                    <Card.Img src={Tarkov} />
                </Card>
               </a>
                <Card>
                    <Card.Img src={Valorant} />
                </Card>
            </CardGroup>
        </>);
    }
}

export default GameSelection;