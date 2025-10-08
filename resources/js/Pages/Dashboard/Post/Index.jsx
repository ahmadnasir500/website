import AdminLayout from "@/Pages/Layouts/AdminLayout"
import { Link, usePage } from "@inertiajs/react";
import SimplePagination from "../../Components/Pagination";


export default function Index() {
    const props = usePage().props;
    return (
        <AdminLayout>
            <div className="container">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Posting</h1>
                    <div className="btn-toolbar mb-2 mb-md-0">
                        <div className="btn-group me-2">
                            <Link href="/dashboard/post/create" className="btn btn-sm btn-outline-secondary">Add New</Link>
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Created At</th>
                                <th scope="col">Updated At</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.datas && props.datas.data ? props.datas.data.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.title}</td>
                                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                                    <td>{new Date(item.updated_at).toLocaleDateString()}</td>
                                    <td>
                                        <Link href={`/dashboard/post/${item.id}/edit`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                        <Link href={`/dashboard/post/${item.id}`} method="delete" as="button" className="btn btn-sm btn-danger" onClick={(e) => {
                                            if (!confirm('Are you sure you want to delete this post?')) {
                                                e.preventDefault();
                                            }
                                        }}>Delete</Link>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan="4" className="text-center">No documents found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <SimplePagination meta={props.datas} />
            </div>
        </AdminLayout>
    );
}