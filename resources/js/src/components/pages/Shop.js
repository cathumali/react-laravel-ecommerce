import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row, Col, Card } from 'react-bootstrap';

const Shop = (props) => {
    const { shop } = props?.items?.data || {};
    return (<>
        <main>
          <Row className="mb-3 ">   
            { shop?.length &&
              shop?.map( (item, key) => {

              const style = {
                backgroundImage:`url(${item?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "18rem",
              }
              return (<React.Fragment key={key}>
                <Col xs={12} sm={6} md={4} lg={3}>
                  <Card className="mb-4 p-2" >
                    <div className="product-display" >
                      <div className="product-display-img" style={style}>
                      </div>
                    </div>
                    <Card.Body>
                      <Card.Title>{ item?.name }</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">{ item?.description }</Card.Subtitle>
                      <Card.Text>
                        ${ item?.price }
                      </Card.Text>
                      <button className="button button-small black-button" type="button">Add To Basket</button>
                    </Card.Body>
                  </Card>
                </Col>
              </React.Fragment>)
            })}
          </Row> 
        </main>
    </>)
}
const mapStateToProps = ( state ) => ({
  items: state.items
}); 
export default connect( mapStateToProps, null )(Shop)