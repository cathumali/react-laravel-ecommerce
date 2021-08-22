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
                <Link className="me-3 py-2 text-dark text-decoration-none" to="/cart">
                    <svg className="w-6 h-6" width={24} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                </Link>
            </nav>
            </div> 
        </header>
    </>
    )
}
export default Header;