import { useState } from "react"
import NavBar from "./components/NavBar/NavBar"
import Cart from "./components/Cart/Cart"

export default function App() {
  let [cardItems, setCardItems] = useState(['product1', 'product2'])
  return (
    <div>
      <NavBar cartItemsCount={cardItems.length} />
      <Cart cartItems={cardItems} onClear={() => setCardItems([])}/>
    </div>
  )
} 
