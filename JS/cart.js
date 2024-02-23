if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    // var addToCartButtons = document.getElementsByClassName('btn-shop-primary')
    // for (var i = 0; i < addToCartButtons.length; i++) {
    //     var button = addToCartButtons[i]
    //     button.addEventListener('click', addToCartClicked)
    // }
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

// function addToCartClicked(event) {
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-img')[0].src
//     console.log(title, price, imageSrc)
//     addItemToCart(title, price, imageSrc)
// }

// Add product to cart 

const cart = [
    {
        id: 0,
        title: 'Flight Simulator',
        price: '25.99',
        imgSrc: './Images/Moosh_Flight_simulator_game_cover_plane_fighter_jet_helicopter__2379d3cd-9573-476d-910d-b435d288e5d4.png',
    },
    {
        id: 1,
        title: 'Happy Blocks',
        price: '29.99',
        imgSrc: "../Images/Moosh_game_covers_platform_games_blocks_pixels_colorful_happy_b7b5248d-2556-4fb8-afe4-860412b69561.png",
    },
    {
        id: 2,
        title: 'Hell On Earth',
        price: '35.99',
        imgSrc: "../Images/Moosh_game_covers_shooter_games_colorful_explotians_guns_helico_29735956-aeb8-43bb-b633-6208381c675b.png",
    },
    {
        id: 3,
        title: 'Racers',
        price: '$29.99',
        imgSrc: "../Images/Moosh_race_car_game_cover_cover_game_sports_car_musle_car_hot_r_1c75769b-cddf-48ae-a56a-1467fec76d75.png",
    },
    {
        id: 4,
        title: 'Raider',
        price: '$29.99',
        imgSrc: "../Images/Moosh_viking_game_cover_viking_ship_warrior_helmets_shields_riv_fde64b89-baa8-4692-a76a-3937a28dd11b.png",
    }
] 

// localStorage.setItem('cart', JSON.stringify(cart));


// function addToCart(product) {
//     const cartString = localStorage.getItem("cart");
//     const cart = JSON.parse(cartString);
//     cart.push(product);
//     localStorage.setItem("cart", JSON.stringify(cart));
// }

// console.log(cart)

// function getCart() {
//     const cartString = localStorage.getItem("cart");
//     const cart = JSON.parse(cartString);
//     return cart
// }


// const productsEl = document.querySelector('.products');

// function renderproducts(){
//     products.forEach((product) => {
//         productsEl.innerHTML += `
//         <div class="shop-item">
//             <span class="shop-item-title">Lightning Fast</span>
//             <div class="games-detail">
//                 <a href="../GamePage/Gameinfo.html"><img class="shop-item-img"
//                         src="../Images/Moosh_Flight_simulator_game_cover_plane_fighter_jet_helicopter__2379d3cd-9573-476d-910d-b435d288e5d4.png"
//                         alt="Lightning Fast game cover"></a>
//                 <p>Flight Simulator</p>
//                 <span class="shop-item-price">$25.99</span>
//                 <button class="btn-shop-primary" type="button">ADD TO CART</button>
//             </div>
//         </div>`;
//     })
// }
// renderproducts();

//  function addItemToCart(title, price, imageSrc) {
//      var cartRow = document.createElement('div')
//      cartRow.classList.add('cart-row')
//      var cartItems = document.getElementsByClassName('shop-item')[0]
//      var cartRowContents = `
//          <span class="shop-item-title">${title}</span>
//          <div class="games-detail">
//              <a href="../GamePage/Gameinfo.html"><img class="shop-item-img"
//                      src="${imageSrc}"
//                      alt="Lightning Fast game cover"></a>
//              <p>Flight Simulator</p>
//              <span class="shop-item-price">${price}</span>
//              <button class="btn-shop-primary" type="button">ADD TO CART</button>
//          </div>`
//      cartRow.innerHTML = cartRowContents
//      cartItems.append(cartRow)
//  }

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityelement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityelement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}