import {Product, ProductsActionTypes} from "../types/products.ts";
import {useDispatch, useSelector} from "react-redux";

const PopUp = ({ visible }: { visible: boolean }) => {
    const shoppingCart: Product[] = useSelector((state: { products: Product[] }) => state.products);
    const dispatch = useDispatch();
    const removeProduct = (product: Product) => {
        dispatch({type: ProductsActionTypes.DELETE_PRODUCT, payload: product.id })
    }

    return (
        <div style={{ display: visible ? 'block' : 'none' }} className='pop-up'>
            {shoppingCart.map((product, index) => (
                <div onClick={() => removeProduct} key={index}>
                    {product.name}: {product.price}$
                </div>
            ))}
        </div>
    );
};

export default PopUp;
