import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { Container } from 'react-bootstrap'
const DefaultLayout = (props) => {
    return <Container className=" py-3">
    
        <Header />
        { props.children }
        <Footer />
    </Container>
}
export default DefaultLayout;