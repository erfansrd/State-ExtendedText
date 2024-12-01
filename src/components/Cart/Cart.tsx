
interface Props {
    cartItems: string[],
    onClear: () => void,
}
const Cart = ({cartItems, onClear}: Props) => {
  return (
    <>
        <h1>Carts</h1>
        <ul>
            {cartItems.map((item) => 
            <li key={item}>{item}</li>
            )}
        </ul>
            <button type="button" onClick={onClear}>Clear</button>
    </>
  )
}

export default Cart