import { useState, useEffect } from "react";

export default function Safelink({url}) {
    
    if(url===undefined || url ===null){
        return null;
    }
    const [showLink, setShowLink] = useState(false);
    const [timer, setTimer] = useState(5);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        let interval;
        if (started && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setShowLink(true);
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [started, timer]);

    const handleUnlock = () => {
        setStarted(true);
    };
    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-6 text-center">
                <div className="card p-4">
                    <h4 className="mb-3">Safelink Protection</h4>
                    <p>
                        Untuk keamanan, link tujuan akan muncul setelah Anda klik tombol di bawah dan menunggu beberapa detik.
                    </p>
                    {!started && !showLink && (
                        <button className="btn btn-primary" onClick={handleUnlock}>
                            Unlock Link
                        </button>
                    )}
                    {started && !showLink && (
                        <div className="mt-3">
                            <span className="text-muted">Tunggu {timer} detik...</span>
                        </div>
                    )}
                    {showLink && (
                        <div className="mt-3">
                            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                                Menuju Link Aman
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}