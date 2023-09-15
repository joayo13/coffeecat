function addToCart(item, quantity) {
  let cart = []
  if(localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
  }
  console.log(cart)
  //check if item already exists in cart, if so, add additional quantity to existing item and save changes
    const exists = cart.find((elem) => elem.title === item.title)
    if(exists) {
      exists.quantity += quantity
      localStorage.setItem('cart', JSON.stringify(cart))
      return
    }
  //otherwise, add new item to cart and save changes
  cart.push({...item, quantity})
  localStorage.setItem('cart', JSON.stringify(cart))
}
function quantityHandler(quantity, itemTitle, setCartUpdated) {
  if(quantity) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const product = cart.find((item) => item.title === itemTitle)
      if(quantity <= 0) {
        cart.splice(cart.indexOf(product), 1)
        localStorage.setItem('cart', JSON.stringify(cart))
        setCartUpdated(true)
        return
      }
      product.quantity = quantity
      localStorage.setItem('cart', JSON.stringify(cart))
      setCartUpdated(true)
    }
}

export {addToCart, quantityHandler}
