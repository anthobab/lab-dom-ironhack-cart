// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!', product);

  let price = Number(product.querySelector('.price span').textContent);
  let quantity = Number(product.querySelector('.quantity > input').value);
  const subtotal = product.querySelector('.subtotal span');
  let subtotalPrice = price * quantity;
  // console.log(price, quantity);

  subtotal.textContent = subtotalPrice;
  return subtotalPrice;

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let total = 0;

  // ITERATION 3
  //... your code goes here
  const ProductList = document.querySelectorAll('.product');
  const totalElement = document.querySelector('#total-value span');
  // console.log(totalElement);
  [...ProductList].forEach(
    (singleProduct) => (total += updateSubtotal(singleProduct))
  );
  totalElement.textContent = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  // target.parentNode.parentNode.remove();
  target.closest('tr').remove();
  calculateAll();
}

// ITERATION 5

function createProduct(event) {
  let price = event.currentTarget
    .closest('tr')
    .querySelector('[placeholder="Product Price"]').value;
  event.currentTarget
    .closest('tr')
    .querySelector('[placeholder="Product Price"]').value = 0;
  let name = document.querySelector('[placeholder="Product Name"]').value;
  document.querySelector('[placeholder="Product Name"]').value = '';

  const trbody = document.querySelector('tbody');
  const trElem = document.createElement('tr');

  trElem.innerHTML = `
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
    `;
  trbody.appendChild(trElem);
  trElem.setAttribute('class', 'product');

  trElem.querySelector('.btn-remove').addEventListener('click', removeProduct);

  calculateAll();
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeBtns = document.getElementsByClassName('btn-remove');
  [...removeBtns].forEach((rembtn) => {
    rembtn.addEventListener('click', removeProduct);
  });

  const createbtn = document.getElementById('create');
  createbtn.addEventListener('click', createProduct);
});
