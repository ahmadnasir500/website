import { useEffect, useState } from "react";
import { Link, router, usePage } from "@inertiajs/react";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const flash = usePage().props.flash || {};

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success.message || "Login successful");
        }
        if (flash.error) {
            toast.error(flash.error.message || "Login failed");
        }
    }, [flash]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Proses login di sini
        router.post("/login", { login, password });
    };

    return (
        <div className="container mt-5">
            <Toaster />
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h3>Login</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="login" className="form-label">Email / Username</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="login"
                                        value={login}
                                        onChange={(e) => setLogin(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Login</button>
                            </form>
                            <div className="mt-3 text-center">
                                <Link href="/" method="get" className="btn btn-link">Home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;