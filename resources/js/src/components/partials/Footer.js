import React from 'react';

const Footer = () => {
    return(<>
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
            <div className="col-12 col-md">
                <h2>EA</h2>
                <small className="d-block mb-3 text-muted">© 2021</small>
            </div>
            <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li> 
            </ul>
            </div>
            <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li> 
            </ul>
            </div>
            <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li> 
            </ul>
            </div>
        </div>
        </footer>
    </>)
}
export default Footer;