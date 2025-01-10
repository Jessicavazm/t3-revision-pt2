// FoodCart is the child component using the props from parent component: FoodList
export default function FoodCart(props) {
    // assign props to a const using the Key Name, you can assign as many props as needed.
    const {foodName} = props;
    return (
        <div>
            <h3>{foodName}</h3>
            <p>Description of the food</p>
        </div>
    )
}