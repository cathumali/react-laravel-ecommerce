import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ShopItemsCard from '../partials/ShopItemsCard';

const Recommended = (props) => {
    const { recommended } = props?.items?.data || {};
    return (<>
        <main>
          <h2 className="pb-2 ">Recommended Items</h2>
          <Row className="mb-3 ">   
            { recommended?.length &&
              recommended?.map( (item, key) => <ShopItemsCard item={item} key={key} /> )
            }
          </Row> 
        </main>
    </>)
}
const mapStateToProps = ( state ) => ({
  items: state.items
}); 
export default connect( mapStateToProps, null )(Recommended)