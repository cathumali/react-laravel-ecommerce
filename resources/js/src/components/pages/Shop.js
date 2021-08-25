import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import ShopItemsCard from '../partials/ShopItemsCard';
import Loader from '../partials/Loader';

const Shop = (props) => {
    const { shop } = props?.items?.data || {};
    if( props?.items?.loading ) {
      return <Loader />
    }
    return (<>
        <main>
          <Row className="mb-3 ">   
            { shop?.length &&
              shop?.map( (item, key) => <ShopItemsCard item={item} key={key} /> )
            }
          </Row> 
        </main>
    </>)
}
const mapStateToProps = ( state ) => ({
  items: state.items
}); 
export default connect( mapStateToProps, null )(Shop)