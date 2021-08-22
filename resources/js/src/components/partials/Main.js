import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import product from '../../images/items/product1.jpg';
import _ from 'lodash'

const Main = () => {
    return (<>
        <main>
          <h2 class="pb-2 ">Featured Products</h2>
          <Row className="row-cols-1 row-cols-md-3 mb-3 ">   
            { _.range(1,5).map( (item, key) => {
              return (<React.Fragment key={key}>
                <Col xs={3}>
                  <Card style={{ width: 'auto' }}>
                    <Card.Img variant="top" src={product} />
                    <Card.Body>
                      <Card.Title>Card Title {item}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                      </Card.Text>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
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