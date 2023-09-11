function addToCart(item, quantity) {
  let prev = []
  if(localStorage.getItem('cart')) {
    prev = JSON.parse(localStorage.getItem('cart'))
  }
  for(let i = 0; i < quantity; i++) {
  prev.push(item)
  }
  localStorage.setItem('cart', JSON.stringify(prev))
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
