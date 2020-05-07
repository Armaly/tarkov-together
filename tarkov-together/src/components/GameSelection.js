import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Tarkov from "../logos/tarkov-logo.jpg";
import Valorant from "../logos/Valorant-logo.png";

class GameSelection extends React.Component{

    render(){
        return(<>
            <CardGroup>
                <Card>
                    <Card.Img src={Tarkov} />
                </Card>
                <Card>
                    <Card.Img src={Valorant} />
                </Card>
            </CardGroup>
        </>);
    }
}

export default GameSelection;