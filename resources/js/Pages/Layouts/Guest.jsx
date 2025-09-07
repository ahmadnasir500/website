import "@css/guest.css";
import { Head, Link, usePage } from "@inertiajs/react";
const Guest = ({ children }) => {
    const website = usePage().props.website;
    return (
        <>
            <Head>
                <title>{`${website.title}`}</title>
                <meta description={`${website.description}`} />
            </Head>

            <div className="container mt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="logo">
                        <Link href={`/`}>Gtmov</Link>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="search-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112 4.5a7.5 7.5 0 014.65 12.15z" />
                        </svg>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        {children}
                    </div>
                    <div className="col-lg-4 right-col ps-lg-4 mt-3">
                        {/* <!-- Articles with smaller images side by side text --> */}
                        <div className="article-item">
                            <img src="https://bewbin.com/wp-content/uploads/2023/03/1bb902da-031e-46e8-81ae-816b35569628-300x119.png" className="article-thumb" width="70" alt="4 Best Ways How to Fix HP Printer 6835 Printhead Error" />
                            <div className="article-text">
                                <h6 className="article-title">4 Best Ways How to Fix HP Printer 6835 Printhead Error</h6>
                                <p className="article-desc">This problem is an important device that must be tet you print documents...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer mt-5">
                <div>Copyright © 2023 gtmov</div>
                <div>design by ilmu</div>
            </footer>
        </>
    )
}

export default Guest;