import { useState } from 'react'

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

function ShoppingCart () {
  const initialCart = [{ name: 'apple', quantity: 3, price: 0.39 }]

  const [cart, setCart] = useState(initialCart)

  function addItem(itemName){
    const cartCopy = [...cart]
    if (cart.some(e => e.name === itemName)){
      const i = cart.findIndex(e => e.name === itemName)
      cartCopy[i].quantity += 1;
      setCart(cartCopy)
    }else {
      const newItem = items.find((item)=>item.name === itemName)
      setCart(prevCart => [...prevCart, {...newItem, quantity: 1}])
    }
    return 
  }

  function increase(name){
    const copyCart = [...cart]
    const item = copyCart.find(item => item.name === name)
    item.quantity += 1
    setCart(copyCart)
  }

  function decrease(name) {
    let copyCart = [...cart]
    const item = copyCart.find(item => item.name === name)
    if(item.quantity > 1){
      item.quantity -= 1
    }else {
      copyCart = copyCart.filter(e => e.name !== name)
    }
    setCart(copyCart)
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={()=>addItem(item.name)}>Add to Cart</button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cart.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
                <button onClick={()=> decrease(item.name)}>-</button>
                {item.quantity}
                <button onClick={()=> increase(item.name)}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${cart.reduce((acc, i)=> acc + (i.quantity * i.price), 0).toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart