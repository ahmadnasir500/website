import "@css/guest.css";
import { Head, Link, usePage } from "@inertiajs/react";
import { useEffect } from "react";
import feather from "feather-icons";


const GuestLayout = ({ children }) => {
    const props = usePage().props;

    useEffect(() => {
        document.title = props.seo.title || 'Gtmov';
        feather.replace();
        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', props.seo.description || 'Gtmov');
        } else {
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = props.seo.description || 'Gtmov';
            document.head.appendChild(meta);
        }
    }, [props.seo]);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
                <div className="container">
                    <Link className="navbar-brand fw-bold text-white" href="/">
                        {props.website.name || 'Gtmov'}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <button id="filmsDropdown"
                                    className="nav-link dropdown-toggle text-white btn btn-link"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Films
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="filmsDropdown">
                                    <li>
                                        <Link className="dropdown-item" href="#">
                                            comming soon
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            {/* Dropdown with submenu */}
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle text-white btn btn-link"
                                    id="legalDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Us
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="legalDropdown">
                                    <li>
                                        <Link className="dropdown-item" href="/privacy-policy">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/disclaimer">
                                            Disclaimer
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" href="/terms-and-conditions">
                                            Terms and Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-white" href="/search">
                                    <span data-feather="search"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                {children}
            </div>
            <footer className="footer mt-5 py-3 bg-light border-top text-center">
                <div>Copyright © 2025 gtmov</div>
                <div>Design by gtmov.xyz</div>
            </footer>
        </>
    );
}

export default GuestLayout;