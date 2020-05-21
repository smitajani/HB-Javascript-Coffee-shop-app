"use strict";

/* Add items to cart */
const addItemToCart = (itemName) => {

  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

/* Reset the cart */
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

/* Increment the price */
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//Event Handler code..

$('.add-to-order').on('click', () => {
    addItemToCart("Coffee");
    incrementCartTotal(1.50);
  // This is the body of your callback function -- add more
  // code here!
  //
  // (You'll want to call the functions we've already defined
  // to manipulate the DOM)
});

$('#place-order').on('click', () => {
    incrementCoffeeSold($('#cart-items').children().length);
    resetCart();

});
