import Card from 'react-bootstrap/Card';

// FoodCart is the child component using the props from parent component: FoodList
export default function FoodCart(props) {
    // assign props to a const using the Key Name, you can assign as many props as needed.
    const { foodName } = props;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{foodName}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}