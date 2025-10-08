import { Link, usePage } from "@inertiajs/react";
import styles from "@css/dashboard.module.css";

export default function Sidebar() {
    const { url, component, props } = usePage();
    return (
        <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light  collapse ${styles["sidebar"]}`}>
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className={`nav-item ${styles["nav-item"]}`}>
                        <Link className={`nav-link ${styles['nav-link']} ${url === '/dashboard' ? styles['active'] : ''}`} href={`/dashboard`}>
                            <span>
                                <span data-feather="home"></span>
                                Dashboard
                            </span>
                        </Link>
                    </li>
                    <li className={`nav-item ${styles["nav-item"]}`}>
                        <Link className={`nav-link ${styles['nav-link']} ${url === '/dashboard/post' ? styles['active'] : ''}`} href={`/dashboard/post`}>
                        <span>
                            <span data-feather="book"></span>
                            Postingan
                        </span>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link
                            className={`nav-link ${styles["nav-link"]} ${url === '/dashboard/screening' ? styles['active'] : ''}`}
                            href="#"
                            id="screeningDropdown"
                            role="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#screeningDropdownMenu"
                            aria-expanded="false"
                        >
                            <span>
                                <span data-feather="file-text"></span>
                                scr Dokumen
                            </span>
                            <span className="ms-2"><i data-feather="arrow-down"></i></span>
                        </Link>
                        <ul id="screeningDropdownMenu" className="collapse list-unstyled ps-4">
                            <li className={`nav-item ${styles["nav-item"]}`}><Link className="nav-link" href="/dashboard/screening">Screening</Link></li>
                            <li className={`nav-item ${styles["nav-item"]}`}><Link className="nav-link" href={"/dashboard/export"}>export</Link></li>
                            <li className={`nav-item ${styles["nav-item"]}`}><Link className="nav-link" href={"/dashboard/import"}>import</Link></li>
                        </ul>
                    </li>
                    <li className={`nav-item ${styles["nav-item"]}`}><Link className={`nav-link ${styles['nav-link']} ${url === '/dashboard/setting' ? styles['active'] : ''}`} href={`/dashboard/setting`}>
                        <span>
                            <span data-feather="settings"></span>
                            Setting
                        </span>
                        <span className="ms-2"><i data-feather="arrow-down"></i></span></Link>
                    </li>
                </ul>
                <h6 className={`${styles['sidebar-heading']} d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`}>
                    <span>Administrator</span>
                </h6>
                <h6 className={`${styles['sidebar-heading']} d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`}>
                    <Link href={`#`} onClick={()=>{ window.open('/','_blank')}}>Link web</Link>
                </h6>
            </div>
        </nav>
    )
}