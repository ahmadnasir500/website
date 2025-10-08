import AdminLayout from "@/Pages/Layouts/AdminLayout"
import { Link, router, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Edit() {

    const {flash,data} = usePage().props;
    const imgPreview = useRef();
    const [newData, setNewData] = useState({
        'title': data.title,
        'body': data.body ,
        'img_tmb': data.img_tmb,
        'is_published': data.is_published
    });

    useEffect(() => {
        if (newData.img_tmb) {
            imgPreview.current.src = `/images/${newData.img_tmb}`;
            imgPreview.current.style.display = 'block';
        }
    }, []);

    const handleSubmit = () => {
        //create update form data
        const formData = new FormData();
        formData.append('title', newData.title);
        formData.append('body', newData.body);
        formData.append('is_published', newData.is_published ? 1 : 0);
        if (newData.img_tmb instanceof File) {
            formData.append('img_tmb', newData.img_tmb);
        }
        formData.append('_method', 'PUT'); // Add this line to spoof the PUT method
        router.post(`/dashboard/post/${data.id}`, formData, {
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
            setNewData({ ...data, 'img_tmb': file });
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
                            <input type="text" className="form-control" value={newData.title} onChange={(e) => setNewData({ ...newData, 'title': e.target.value })} id="title" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="img-preview" className="form-label">Gambar dari Informasi <span style={{ color: "red" }} className="form-text">1060*750</span></label>
                            <img className="img-preview img-fluid mb-3 col-sm-5" ref={imgPreview} />
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
                            <textarea className="form-control" id="body" name="body" rows="5" value={newData.body} onChange={(e) => setNewData({ ...newData, 'body': e.target.value })} required></textarea>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="is_published"
                                checked={data.is_published}
                                onChange={e => setNewData({ ...newData, is_published: e.target.checked })}
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
