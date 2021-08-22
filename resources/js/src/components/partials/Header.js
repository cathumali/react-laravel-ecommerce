import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
    return(<>
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <h2>EA</h2>
             </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link className="me-3 py-2 text-dark text-decoration-none" to="/">Home</Link> 
                <Link className="me-3 py-2 text-dark text-decoration-none" to="/account">Account</Link> 
            </nav>
            </div> 
        </header>
    </>
    )
}
export default Header;