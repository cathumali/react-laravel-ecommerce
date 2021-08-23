import React, { useEffect } from 'react'; 
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchItems } from '../../redux/actions';

const DefaultLayout = (props) => {
    useEffect(() => {
        props.fetchItems()
    },[]);

    console.log(props.items)
    return <Container className="py-3 default-layout">    
                <Header />
                { props.children }
                <Footer />
            </Container>
}
const mapStateToProps = ( state ) => ({
    cart : state.cart_data,
    items: state.items
});
const mapDispatchToProps = (dispatch) => ({
fetchItems  : () => dispatch( fetchItems() ),
});
export default connect( mapStateToProps, mapDispatchToProps )(DefaultLayout)