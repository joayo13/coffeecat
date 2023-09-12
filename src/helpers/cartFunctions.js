function addToCart(item, quantity) {
  let cart = JSON.parse(localStorage.getItem('cart'))
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
function checkIfRemoveOrDecrement(product, cart) {
  for(const item in cart) {
    if(item.title === product.title) {
        if(item.quanity - 1 === 0) {
            localStorage.setItem('cart', cart.filter(!item))
            return
        }
        localStorage.setItem('cart', cart.map((item) => item.title === product.title ? item.quantity === item.quantity - 1 : item))
    }
  }
}
function removeFromCart(product) {
  let prev = {}
  if(localStorage.getItem('cart')) {
    prev = localStorage.getItem('cart')
  }
  localStorage.setItem('cart', checkIfRemoveOrDecrement(product, prev))
}

export {addToCart, removeFromCart}
