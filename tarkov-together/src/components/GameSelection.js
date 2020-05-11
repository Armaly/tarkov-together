import React from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Tarkov from "../logos/tarkov-logo.jpg";
import Valorant from "../logos/Valorant-logo.png";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class GameSelection extends React.Component{

    render(){
        return(<>
            <CardGroup>
              
              <Link to={{pathname:"/tarkov", state:{game:"tarkov"} }}>
                <Card>
                    <Card.Img src={Tarkov} />
                </Card>
               </Link>

               <Link to={{pathname:"/valorant", state:{game:"valorant"} }}> 
                <Card>
                    <Card.Img src={Valorant} />
                </Card>
                </Link>

            </CardGroup>
        </>);
    }
}

GameSelection.propTypes = {
    game: PropTypes.string
};

export default GameSelection;