export default function PageLoader({ visible = true, message = "Memuat...", zIndex = 1050 }) {
if (!visible) return null;

    const overlay = {
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(255,255,255,1)",
        zIndex,
        padding: "1rem",
    };

    const box = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.75rem",
        background: "transparent",
    };

    const msgStyle = {
        color: "#333",
        fontSize: "0.95rem",
    };
    return (
        <div style={overlay} role="status" aria-live="polite">
            <div style={box}>
                <svg width="56" height="56" viewBox="0 0 50 50" aria-hidden="true">
                    <circle cx="25" cy="25" r="20" fill="none" stroke="#e6e6e6" strokeWidth="5"></circle>
                    <path fill="#0d6efd" d="M25 5a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6a1 1 0 0 1 1-1z">
                        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite" />
                    </path>
                </svg>
                <div style={msgStyle}>{message}</div>
            </div>
        </div>
    );
}