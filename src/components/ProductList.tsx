import {Product} from "../types/products.ts";
import {useSelector} from "react-redux";



const ProductList = () => {
    const shoppingCart: Product[] = useSelector((state: { products: Product[] }) => state.products);
    return (
        <div>
            {shoppingCart.map((product, index) => (
                <div key={index}>
                    {product.name}: {product.price}$
                </div>
            ))}
        </div>
    );
};

export default ProductList;