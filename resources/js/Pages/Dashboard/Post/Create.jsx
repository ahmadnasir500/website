import AdminLayout from "@/Pages/Layouts/AdminLayout"
import { Head, Link, router, usePage } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Create() {
    const flash = usePage().props.flash;
    const imgPreview = useRef();
    const quillRef = useRef();
    const [data, setData] = useState({
        'title': '',
        'content': '',
        'img_tmb': null,
        'status': false
    });

    useEffect(() => {
        if (flash.image) {
            imgPreview.current.src = flash.image;
        }
    }, [flash]);

    useEffect(() => {
        if (window.Quill) {
            quillRef.current = new window.Quill('#quill', {
                theme: 'snow'
            });

            // If there's initial content, load it into the editor
            if (data.content) {
                quillRef.current.root.innerHTML = data.content;
            }

            quillRef.current.on('text-change', function () {
                setData(prev => ({ ...prev, content: quillRef.current.root.innerHTML }));
            });
        }

        return () => {
            // cleanup reference
            if (quillRef.current) {
                quillRef.current = null;
            }
        };
    }, []);

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content);
        formData.append('status', data.status ? 1 : 0);
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
            <Head title="Create Post - Dashboard">
                <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" />
                <script src="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.js"></script>
            </Head>
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
                            <input type="text" className="form-control" value={data.title} onChange={(e) => setData({ ...data, 'title': e.target.value })} id="title" required />
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
                            <label htmlFor="quill" className="form-label">Konten</label>
                            <div id="quill" style={{ minHeight: '300px' }} />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="status"
                                checked={data.status}
                                onChange={e => setData({ ...data, status: e.target.checked })}
                            />
                            <label className="form-check-label" htmlFor="status">Publish</label>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
}