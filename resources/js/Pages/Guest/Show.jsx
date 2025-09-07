import { usePage } from "@inertiajs/react";
import Guest from "../Layouts/Guest";

const Show = ()=>{
    const data = usePage().props.data;
    return (
        <Guest>
            <div className="row">
                <div className="col-12">
                    {data.body}
                </div>
            </div>
        </Guest>
    );
}

export default Show;