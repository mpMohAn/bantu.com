import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


const CardExampleCard = (props) => (
  
  <Card>
    <Link to={{
      pathname: '/package',
      state: {image: props.image}
    }} >
      <Image src={props.image} />
    </Link>
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
  </Card>
)

export default CardExampleCard;