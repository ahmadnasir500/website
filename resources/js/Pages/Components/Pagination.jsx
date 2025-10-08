import { router } from "@inertiajs/react";

export default function SimplePagination({ meta ,setperPage=10}) {
    if (!meta || meta.last_page <= 1) return null;

    const { current_page, last_page } = meta;

    // Generate page numbers: [1,2,3,4,...,last_page]
    let pages = [];
    if (last_page <= 5) {
        for (let i = 1; i <= last_page; i++) pages.push(i);
    } else {
        pages = [1];
        if (current_page > setperPage/2) pages.push('...');
        for (let i = Math.max(2, current_page - 1); i <= Math.min(last_page - 1, current_page + 1); i++) {
            pages.push(i);
        }
        if (current_page < last_page - 2) pages.push('...');
        pages.push(last_page);
    }

    const goToPage = (page) => {
        if (page !== current_page && typeof page === "number") {
            router.visit(`?page=${page}`);
        }
    };

    return (
        <div className="d-flex justify-content-center my-4">
            <ul className="pagination">
                <li className={`page-item${current_page === 1 ? " disabled" : ""}`}>
                    <button className="page-link" onClick={() => goToPage(current_page - 1)} disabled={current_page === 1}>
                        &larr; Prev
                    </button>
                </li>
                {pages.map((page, idx) =>
                    page === '...' ? (
                        <li key={idx} className="page-item disabled">
                            <span className="page-link">...</span>
                        </li>
                    ) : (
                        <li key={idx} className={`page-item${page === current_page ? " active" : ""}`}>
                            <button className="page-link" onClick={() => goToPage(page)}>
                                {page}
                            </button>
                        </li>
                    )
                )}
                <li className={`page-item${current_page === last_page ? " disabled" : ""}`}>
                    <button className="page-link" onClick={() => goToPage(current_page + 1)} disabled={current_page === last_page}>
                        Next &rarr;
                    </button>
                </li>
            </ul>
        </div>
    );
}