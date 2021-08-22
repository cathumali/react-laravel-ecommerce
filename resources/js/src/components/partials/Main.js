import React from 'react';
import _ from 'lodash';
import { Row, Col, Card } from 'react-bootstrap';
import product from '../../images/items/product1.jpg';
import Heroes from '../partials/Heroes';

const style = {
  backgroundImage:`url(${product})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "18rem",
}
const Main = () => {
    return (<>
        <Heroes />
        <main>
          <h2 class="pb-2 ">Featured Products</h2>
          <Row className="mb-3 ">   
            { _.range(1,5).map( (item, key) => {
              return (<React.Fragment key={key}>
                <Col xs={6} md={3}>
                  <Card className="mb-4 p-4 " >
                    <div className="product-display" >
                      <div className="product-display-img" style={style}>
                        {/* <Card.Img variant="top" src={`${product}`} /> */}
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title>Card Title {item}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card 
                      </Card.Text>
                      <button class="button button-small " type="button">Add To Basket</button>
                    </Card.Body>
                  </Card>
                </Col>
              </React.Fragment>)
            })}
          </Row> 
        </main>
    </>)
}
export default Main;