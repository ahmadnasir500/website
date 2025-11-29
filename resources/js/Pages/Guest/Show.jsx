import { usePage } from "@inertiajs/react";
import GuestLayout from "../Layouts/GuestLayout";
import Safelink from "../Components/Safelink";

const Show = () => {
    const props = usePage().props;
    const dataminimal = props.dataminimal;
    return (
        <GuestLayout>
            <div className="row mt-3">
                <div className="col-12">
                    <img src={"https://image-placeholder.com/images/actual-size/1024x600.png"} className="card-img-top" height={100} alt={`ads`} />
                </div>
            </div>
            <hr className="my-4" />
            <h3 className="mb-3">{props.data.title}</h3>
            <p className="text-muted mb-4">Diposting pada {new Date(props.data.created_at).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <hr className="my-4" />
            <div className="row">
                <div className="col-8">
                    <div className="row">
                        <div className="col-12">
                            <img src={props.data.img_tmb ? "/images/" + props.data.img_tmb : "https://image-placeholder.com/images/actual-size/720x486.png"} className="card-img-top" alt={props.data.slug} />
                        </div>
                        <div className="col-12">
                            {props.data.content}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 right-col ps-lg-4 mt-3">
                    <form className="mb-4">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search..." aria-label="Search" />
                            <button className="btn btn-primary" type="submit">
                                <i data-feather="search"></i>
                            </button>
                        </div>
                    </form>
                    <h5 className="mb-3">Artikel Lainnya</h5>
                    {dataminimal.map((data, key) => (
                        <div className="article-item d-flex align-items-start mb-3" key={key}>
                            <img
                                src={data.img_tmb ? "/images/" + data.img_tmb : "https://image-placeholder.com/images/actual-size/300x119.png"}
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
            <Safelink url={props.url} />
        </GuestLayout>
    );
}

export default Show;