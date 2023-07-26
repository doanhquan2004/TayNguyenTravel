// DOM VARIABLES
const listItemDOM = document.querySelector('.list-item');
const xoaHet = document.querySelector('.list-action p');

// GLOBAL VARIABLES
let listCount = 0;

function cartItem(item) {
	const { id, ten, gia, dvt, imgUrl } = item;
	const price = new Intl.NumberFormat('vi-vn').format(gia);
	let html = `<div class="cart-item">
  <div class="cart-image">
    <img src="${imgUrl}" alt="img">
  </div>
  <div class="cart-info">
    <p class="item-name">${ten}</p>
    <p class="cart-price">
      ${price}vnd/${dvt}
    </p>
  </div>
  <div class="cart-action">
    <i class="fa-solid fa-xmark"></i>
  </div>
</div>`;

	return html;
}

function addCart(id) {
	const item = data.find((item) => item.id === id);

	if (!item) return;

	listItemDOM.innerHTML += cartItem(item);
	document.querySelectorAll('.cart-action').forEach((item) => {
		item.addEventListener('click', function () {
			listItemDOM.removeChild(this.parentElement);
			--listCount;
			renderCart();
		});
	});
	++listCount;
	renderCart();
}

function renderCart() {
	if(listCount === 0) {
    xoaHet.style.display = 'none';
    listItemDOM.querySelector('#no-cart').style.display = 'block';
  }
  if(listCount >= 1) {
    xoaHet.style.display = 'flex'
    listItemDOM.querySelector('#no-cart').style.display = 'none';
  }
}

function removeAll() {
  listItemDOM.innerHTML = `<p id="no-cart">CHƯA CÓ SẢN PHẨM NÀO</p>`
  listCount = 0;
}