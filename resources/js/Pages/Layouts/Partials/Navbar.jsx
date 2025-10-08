import { Link, router, usePage } from "@inertiajs/react"
import styles from "@css/dashboard.module.css";

export default function Navbar() {
    const datas = usePage().props;
    
    const logoutHandler = () => {
        router.post('/dashboard/logout');
    }
    
    return (
        <header className="navbar navbar-dark sticky-top bg-success flex-md-nowrap p-0 shadow">
            <Link className="navbar-brand col-md-3 col col-lg-2 me-0 px-3 fs-6 text-center" href={'/dashboard'} target="_blank">{datas.website ? datas.website.name:"NONAME"}</Link>
            <button
                className={`navbar-toggler  d-md-none collapsed ${styles['navbar-toggler']}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarMenu"
                aria-controls="sidebarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <input
                className="form-control form-control-dark w-100"
                type="text"
                placeholder="Search"
                aria-label="Search"
            />
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <form>
                        <button
                            type="button"
                            className="nav-link px-3 bg-success border-0 text-white"
                            onClick={logoutHandler}
                        >
                            Logout <span data-feather="log-out" />
                        </button>
                    </form>
                </div>
            </div>
        </header>
    );
}