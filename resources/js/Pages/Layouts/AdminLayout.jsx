import { Toaster } from "react-hot-toast";
import Navbar from "./Partials/Navbar";
import Sidebar from "./Partials/Sidebar";
import { useEffect } from "react";
import feather from "feather-icons";

export default function AdminLayout({ children }) {

    useEffect(() => {
        // Initialize Feather icons
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }, []);

    return (
        <>
            <Toaster />
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <main className="col-md-9 ms-sm-auto col-lg-10 col px-md-4">{children}</main>
                </div>
            </div>
        </>
    );
}
