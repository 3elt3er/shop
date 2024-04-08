import "./App.css";
import { Product, ProductsActionTypes } from "./types/products.ts";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react";

const App = () => {
    const shoppingCart: Product[] = useSelector((state: { products: Product[] }) => state.products);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(true)

    const products: Product[] = [
        { name: 'Сыр', price: 5 },
        { name: 'Колбаса', price: 10 },
        { name: 'Творог', price: 6 },
        { name: 'Курица', price: 4 },
        { name: 'Индейка', price: 5 },
        { name: 'Говядина', price: 10 },
        { name: 'Свинина', price: 4 },
        { name: 'Яйца', price: 3 },
        { name: 'Шампунь', price: 8 },
    ];

    const addProduct = (product: Product) => {
        dispatch({ type: ProductsActionTypes.ADD_PRODUCT, payload: product })
    }

    const totalPrice = () => shoppingCart.reduce()

    return (
        <div className='App'>
            <div className="header">
                <button className='cart'>Корзина: {totalPrice()}$ - {numOfProducts()}</button>
            </div>
            <div className="main">
                <div className='products'>
                {products.map((product, index) => (
                        <button
                            key={index}
                            className='product'
                            onClick={() => addProduct(product)}
                        >
                            {product.name}: {product.price}$
                        </button>
                    ))}
                </div>
                <div style={{display: visible ? 'block' : 'none'}}>
                    {shoppingCart.map((product, index) => (
                        <div key={index}>
                            {product.name}: {product.price}$
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default App;
