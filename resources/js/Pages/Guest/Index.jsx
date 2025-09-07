import { Link, usePage } from "@inertiajs/react";
import Guest from "../Layouts/Guest";

const Index = () => {
    const datas = usePage().props.data;
    return (
        <Guest>
            <div className="row g-3">
                {/* article */}
                {datas ? (
                    <>
                        {datas.map((data, key) => (
                            <div className="col-md-6" key={key}>
                                <div className="card border-0">
                                    <Link href={`/${data.slug}`}>
                                        <img src={data.img_tmb || "https://image-placeholder.com/images/actual-size/720x486.png"} className="card-img-top" alt={data.title} />
                                    </Link>
                                    <div className="card-body p-0 pt-2">
                                        <h6 className="article-title">{data.title}</h6>
                                        <p className="article-desc">{data.body}</p>
                                    </div>
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
                {/* article */}
            </div>
        </Guest>
    );
}

export default Index;