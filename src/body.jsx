import Cart from "./Cart";
import items from "./FoodItems";

export default function Body() {

	return (
		<main className="container">
			<section className="section">
				<h2 className="section-title">Menu</h2>
				<div className="grid">
					{items.map((item) => {
						return (
							<div key={item.id} className="card">
								<Cart value={item}></Cart>
							</div>
						)
					})}
				</div>
			</section>
		</main>
	);
}