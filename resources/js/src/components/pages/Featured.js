import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ShopItemsCard from '../partials/ShopItemsCard';
import Loader from '../partials/Loader';

const Featured = (props) => {
  const { featured } = props?.items?.data || {};
  if( props?.items?.loading ) {
    return <Loader />
  }
  return (<>
        <main>
          <h2 className="pb-2 ">Featured Items</h2>
          <Row className="mb-3 ">   
            { featured?.length &&
              featured?.map( (item, key) => <ShopItemsCard item={item} key={key} /> )
            }
          </Row> 
        </main>
    </>)
}
const mapStateToProps = ( state ) => ({
  items: state.items
}); 
export default connect( mapStateToProps, null )(Featured)