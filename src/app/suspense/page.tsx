import { Suspense } from "react";
import {Product} from "../Components/product/page";

export default function page() {
    return (
        <div>
            <Suspense fallback={<p>Loading products ...</p>}>
                <Product />
            </Suspense>
        </div>
    );
}