import FoodCart from "./FoodCard";

const foods = ['pizza', 'pasta', 'spaghetti', 'ramen', 'eggs benedict', 'dumplings', 'noodles', 'pork bun'];

// name of the function needs to be the same as the component name
export default function FoodList() {
    return (
        <section>
            {
                foods.map(food => {
                    return <p><FoodCart foodName={food}/></p>
                })
            }
        </section>
    )
}