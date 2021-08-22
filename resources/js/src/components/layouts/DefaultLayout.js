import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Heroes from '../partials/Heroes';
import { Container } from 'react-bootstrap';

const DefaultLayout = (props) => {
    return <Container className="py-3 default-layout">    
                <Header />
                <Heroes />
                { props.children }
                <Footer />
            </Container>
}
export default DefaultLayout;