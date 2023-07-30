const errorBtn = document.querySelector('.js-error');
const costBtn = document.querySelector('.js-total-cost');
function handleCostKeydown(event) {

        if (event.key === 'Enter') {
            calculateTotal();
        } 
    }
function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

        errorBtn.innerHTML = '';
        

    if (cost <= 0){
        costBtn.innerHTML = '';
        errorBtn.innerHTML = 'Error: cost cannot be less than or equal $0';
        return;
    } 

  if (cost < 40) {
    cost = cost + 10;
  }

  document.querySelector('.js-total-cost')
    .innerHTML = `$${cost}`;
}

function subscribe() {
  const buttonElement = document.querySelector('.js-subscribe-button');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerHTML = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerHTML = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}
