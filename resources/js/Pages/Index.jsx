import { Head, Link, router, usePage } from '@inertiajs/react';
import Guest from './Layouts/Guest';
const Index = () => {
    return (
        <>
            <Head>
                <title>{`halaman index`}</title>
            </Head>
            <Guest />
        </>
    );
}

export default Index;
