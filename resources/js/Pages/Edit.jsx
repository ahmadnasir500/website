import { Head, Link } from "@inertiajs/react";

const Edit = () => {

    return (
        <>
            <Head>
                <title>{`halaman edit`}</title>
            </Head>
            <div>
                <Link href={`/`}
                    method="get"><button className="btn btn-info text-decoration-none btn-warning">home</button></Link>
                halaman Edit
            </div>
        </>
    );
}

export default Edit;