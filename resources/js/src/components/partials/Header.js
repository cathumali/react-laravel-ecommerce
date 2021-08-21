import React from 'react';

const Header = () => {
    return(<>
        <header>
            <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <h2>EA</h2>
             </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <a className="me-3 py-2 text-dark text-decoration-none" href="/">Home</a> 
            </nav>
            </div>

            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 className="display-4 fw-normal">Pricing</h1>
            <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
            </div>
        </header>
    </>
    )
}
export default Header;