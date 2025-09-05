import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/slicer/CartSlice";
import { addPrice, removePrice } from "../redux/slicer/PriceSlice";

export default function Cart(item) {

	const [cart, setCart] = useState(false);

	const disPatch = useDispatch();

	function cartStatus() {
        setCart(!cart);
		if(cart) {
            disPatch(removeItem());
			disPatch(removePrice(item.value.price));
		} else {
            disPatch(addItem());
            disPatch(addPrice(item.value.price));
		}
	}
    
	return(
		<div className="card-body">
			<h3 className="item-name">{item.value.name}</h3>
			<p className="item-price">${item.value.price}</p>
			<button className={"btn " + (cart ? "btn-secondary" : "btn-primary")} onClick={cartStatus}>{cart ? 'Remove' : 'Add'}</button>
		</div>
	);
}