import { Link, usePage } from "@inertiajs/react";
import GuestLayout from "../Layouts/GuestLayout";
import SimplePagination from "../Components/Pagination";
import { useEffect, useRef, useState } from "react";
import JuicyAds from "../Components/JuicyAds";

const LazyArticle = ({ data }) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="col-md-6" ref={ref}>
            {!visible ? (
                <div className="card border-0">
                    <div className="card-img-top bg-secondary" style={{ height: 200, width: "100%", opacity: 0.2 }} />
                    <div className="card-body p-0 pt-2">
                        <div className="placeholder-glow">
                            <span className="placeholder col-8 mb-2" style={{ height: 24, display: "block" }}></span>
                            <span className="placeholder col-12" style={{ height: 16, display: "block" }}></span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card border-0">
                    <Link href={`/news/${data.slug}`}>
                        <img src={data.img_tmb ? "/storage/images/" + data.img_tmb : "https://image-placeholder.com/images/actual-size/720x486.png"} className="card-img-top" alt={data.title} />
                        <div className="card-body p-0 pt-2">
                            <h6 className="article-title">{data.title}</h6>
                            <p className="article-desc">{data.excerpt}</p>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

const Index = () => {
    const props = usePage().props;
    const datas = props.datas;
    const dataminimal = usePage().props.dataminimal;

    useEffect(() => {

    }, []);

    return (
        <GuestLayout>
            <div className="row mt-3">
                <div className="col-12">
                    {/* <img src={"https://image-placeholder.com/images/actual-size/1024x600.png"} className="card-img-top" height={100} alt={`ads`} /> */}
                    {
                        props.website.ads === 'moderate' && <JuicyAds />
                    }
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-8 col-md-12">
                    <div className="row g-3">
                        {/* article */}
                        {datas.data ? (
                            <>
                                {datas.data.map((data, key) => (
                                    // <LazyArticle data={data} key={key} />
                                    <div className="col-md-6" key={key}>
                                        <div className="card border-0">
                                            <Link href={`/news/${data.slug}`}>
                                                <img src={data.img_tmb ? "/storage/images/" + data.img_tmb : "https://image-placeholder.com/images/actual-size/720x486.png"} className="card-img-top" alt={data.title} />
                                                <div className="card-body p-0 pt-2">
                                                    <h6 className="article-title">{data.title}</h6>
                                                    <p className="article-desc">{data.excerpt}</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body p-0 pt-2">
                                        <h6 className="article-title">Posting tidak ditemukan</h6>
                                    </div>
                                </div>
                            </div>
                        )}
                        <SimplePagination meta={datas} setperPage={datas.per_page} />
                        {/* article */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 right-col ps-lg-4 mt-3">
                    <h5 className="mb-3">Artikel Lainnya</h5>
                    {dataminimal.map((data, key) => (
                        <div className="article-item d-flex align-items-start mb-3" key={key}>
                            <img
                                src={data.img_tmb ? "/storage/images/" + data.img_tmb : "https://image-placeholder.com/images/actual-size/300x119.png"}
                                className="article-thumb rounded me-3"
                                width="70"
                                alt={data.slug}
                            />
                            <div className="article-text">
                                <h6 className="article-title mb-1">{data.title}</h6>
                                <p className="article-desc small text-muted mb-0">
                                    {data.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </GuestLayout>
    );
}

export default Index;