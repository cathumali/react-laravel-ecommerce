import React from 'react'; 
import bg from '../../images/bg/img6.png';
import { Container, Row } from 'react-bootstrap'
const style = {
    // backgroundColor: "#eaeceb", 
    // backgroundImage: `url(${bg})`
}
const Heroes = () => {
    return (<>
    <Container className="my-5">
        <Row className="pb-0 pe-lg-0  align-items-center rounded-3 border shadow-lg" style={style}>
            <div className="col-lg-7 p-3 p-lg-5 ">
                <h1 className="display-4 fw-bold lh-1">Shop with ease </h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="button">Shop Now</button>
                </div>
            </div>
            <div className="col-lg-5 p-0 overflow-hidden ">
                <img className="rounded-lg-3" src={bg} width={"100%"} />
            </div>
        </Row>
    </Container>
    </>)
}
export default Heroes;