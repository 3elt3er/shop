import "./App.css"
import {Products} from "./types/products.ts";

const App = () => {
    const totalPrice = 1000;
    const numOfProduct = 2
    const prices: Products = {
        cheese: 5,
        sausage: 10,
        cottageCheese: 6,
        chicken: 4,
        turkey: 5,
        beef: 10,
        pork: 4,
        eggs: 3,
        shampoo: 8,
    }
    return (
        <div className='App'>
            <div className="header">
               <button className='cart'>Корзина: {totalPrice}$ - {numOfProduct}</button>
            </div>
            <div className="main">
                <div className='products'>
                    <button className='product'>Сыр: {prices.cheese}$</button>
                    <button className='product'>Колбаса: {prices.sausage}$</button>
                    <button className='product'>Творог: {prices.cottageCheese}$</button>
                    <button className='product'>Курица: {prices.chicken}$</button>
                    <button className='product'>Индейка: {prices.turkey}$</button>
                    <button className='product'>Говядина: {prices.beef}$</button>
                    <button className='product'>Свинина: {prices.pork}$</button>
                    <button className='product'>Яйца: {prices.cheese}$</button>
                    <button className='product'>Шампунь:{prices.shampoo}$</button>
                </div>
            </div>
        </div>
    );
};

export default App;