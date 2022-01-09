import React from 'react'
import { Card, CardHeader, CardBody, CardText, CardFooter, CardImg } from 'reactstrap'

function PokemonCard(props) {

    const style = 'pokemonCard text-center ' + props.type;

    return (
        <Card className={style}>
            <CardHeader><h4>{props.name}</h4></CardHeader>
            <CardBody>
                <CardText><small className="text-muted">#{props.id}</small></CardText>
                <CardImg style={{height: 110}} src={props.img} alt="Card image cap" />
                
            </CardBody>
            <CardFooter>type: {props.type}</CardFooter>
        </Card>
    )
}

export default PokemonCard
