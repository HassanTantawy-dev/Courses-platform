import React, { useEffect } from 'react'

function Navbar() {
    useEffect(() => {
        // Initialize MDB components after component mounts
        if (window.mdb) {
            window.mdb.Collapse.getOrCreateInstance(document.querySelector('[data-mdb-collapse-init]'));
            document.querySelectorAll('[data-mdb-dropdown-init]').forEach(dropdown => {
                window.mdb.Dropdown.getOrCreateInstance(dropdown);
            });
        }
    }, []);

    return (
        <div>
            <>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    {/* Container wrapper */}
                    <div className="container-fluid">
                        {/* Toggle button */}
                        <button
                            data-mdb-collapse-init=""
                            className="navbar-toggler"
                            type="button"
                            data-mdb-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <i className="fas fa-bars" />
                        </button>
                        {/* Collapsible wrapper */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {/* Navbar brand */}
                            <a className="navbar-brand mt-2 mt-lg-0" href="#">
                                <img
                                    src="/public/img/Frame 22.png"
                                    height={15}
                                    alt="MDB Logo"
                                    loading="lazy"
                                />
                            </a>
                            {/* Left links */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Categories
                                    </a>
                                </li>
                            </ul>
                            {/* Left links */}
                        </div>
                        {/* Collapsible wrapper */}
                        {/* Right elements */}
                        <div className="d-flex align-items-center">
                            {/* Icon */}
                            <a className="text-reset me-3" href="#">
                                <i className="fas fa-shopping-cart" />
                            </a>
                        </div>
                        {/* Right elements */}
                    </div>
                    {/* Container wrapper */}
                </nav>
                {/* Navbar */}
            </>

        </div>
    )
}

export default Navbar