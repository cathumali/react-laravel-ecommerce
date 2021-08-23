import React, { useEffect } from 'react'; 
import { connect } from 'react-redux';
import Heroes from '../partials/Heroes';
import Featured from '../pages/Featured';
import Recommended from '../pages/Recommended';

const Home = (props) => {

    useEffect(() => {
        props.fetchItems()
    },[]);

    return <>  
        <Heroes />
        <Featured />
        <Recommended />
    </>
}
const mapStateToProps = ( state ) => ({
    cart : state.cart_data 
 }); 
 export default connect( mapStateToProps, null )(Home)