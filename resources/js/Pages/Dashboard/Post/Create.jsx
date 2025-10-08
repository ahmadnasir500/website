import AdminLayout from "@/Pages/Layouts/AdminLayout"
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Create() {
    const flash = usePage().props.flash;
    const imgPreview = useRef();
    const [data,setData] = useState({
        'title':'',
        'body':'',
        'img_tmb':null,
        'is_published': false
    });

    useEffect(() => {
        if (flash.image) {
            imgPreview.current.src = flash.image;
        }
    }, [flash]);

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('body', data.body);
        formData.append('is_published', data.is_published ? 1 : 0);
        formData.append('img_tmb', data.img_tmb);
        router.post('/dashboard/post', formData, {
            forceFormData: true,
            onSuccess: (page) => {
                // The process_id will be available in flash message after redirect
                // Progress tracking will start automatically via useEffect
                
                if (flash.success) {
                    toast.success(flash.success);
                } else if (flash.error) {
                    toast.error(flash.error);
                }
            },
        });

    };
    const handleChangeimage = (e) => {
        const file = e.target.files[0];
        if (file && imgPreview.current) {
            imgPreview.current.style.display = 'block';
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (event) {
                imgPreview.current.src = event.target.result;
            };
            setData({ ...data, 'img_tmb': file });
        }
    }
    return (
        <AdminLayout>
            <div className="container">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Halaman Tambah</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <Link href="/dashboard/post" className="btn btn-sm btn-outline-secondary">back</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" value={data.title} onChange={(e)=>setData({...data,'title':e.target.value})} id="title" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img-preview" className="form-label">Gambar dari Informasi <span style={{ color: "red" }} className="form-text">1060*750</span></label>
                            <img className="img-preview img-fluid mb-3 col-sm-5" ref={imgPreview}/>
                            <input
                                id="img-preview"
                                type="file"
                                className="form-control"
                                onChange={handleChangeimage}
                                accept={"image/*"}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Konten</label>
                            <textarea className="form-control" id="body" name="body" rows="5" value={data.body} onChange={(e)=>setData({...data,'body':e.target.value})} required></textarea>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="is_published"
                                checked={data.is_published}
                                onChange={e => setData({ ...data, is_published: e.target.checked })}
                            />
                            <label className="form-check-label" htmlFor="is_published">Publish</label>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}