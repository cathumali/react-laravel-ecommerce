import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ShopItemsCard from '../partials/ShopItemsCard';
import Loader from '../partials/Loader';

const Recommended = (props) => {
    const { recommended } = props?.items?.items?.data || {};
    return (<>
        <main>
          <h4 className="fw-bolder mb-4">Recommended Items</h4>
          { props?.items?.loading && <Loader /> }
          <Row className="mb-3 gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4">   
            { Boolean(recommended?.length) &&
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