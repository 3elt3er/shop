import "./App.css";
import { Product, ProductsActionTypes } from "./types/products.ts";
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react";
import ProductList from "./components/ProductList.tsx";
import PopUp from "./components/PopUp.tsx";

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

    const totalPrice = shoppingCart.reduce((total, product) => product.price + total, 0)

    return (
        <div className='App'>
            <div className="header">
                <button
                    onClick={() => setVisible(!visible)}
                    className='cart'>
                    Корзина: {totalPrice}$ - {shoppingCart.length}</button>
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
                <ProductList/>
                <PopUp visible={visible}/>
            </div>
        </div>
    );
};

export default App;
