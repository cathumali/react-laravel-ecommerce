import React from 'react'; 
import bg from '../../images/bg/img6.png';
import { Container, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const style = {
    width: "1em",
    marginLeft: ".3em"
}
const Heroes = () => {
    return (<>
    <Container className="my-5">
        <Row className="pb-0 pe-lg-0  align-items-center rounded-3 border shadow-lg" >
            <div className="col-lg-7 p-3 p-lg-5 ">
                <h1 className="display-4 fw-bold lh-1">Shop with ease </h1>
                <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <Link to="/shop" className="text-decoration-none">
                        <button type="button" className="button black-button shop-now-btn">
                            Shop Now
                            <svg style={style} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </Link>
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