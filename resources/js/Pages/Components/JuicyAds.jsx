import { useEffect, useRef } from "react";

export default function JuicyAds() {
    const insRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://poweredby.jads.co/js/jads.js";
        script.async = true;
        script.setAttribute("data-cfasync", "false");
        document.body.appendChild(script);

        script.onload = () => {
            window.adsbyjuicy = window.adsbyjuicy || [];
            window.adsbyjuicy.push({ adzone: 1102840});
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="my-3 text-center">
            <ins
                id="1102840"
                data-width="728"
                data-height="90"
            ></ins>
        </div>
    );
}