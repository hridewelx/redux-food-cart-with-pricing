import { useSelector } from "react-redux";

export default function Header () {

    const count = useSelector((state) => state.cart.count);
    const price = useSelector((state) => state.price.price);

    return(
        <div className="app-header">
            <h1>Cart: {count}</h1>
            <h1>Price: {price}</h1>
        </div>
    );
}