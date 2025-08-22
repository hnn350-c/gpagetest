// cart.js unified
let cart = JSON.parse(localStorage.getItem('cart')||'[]');

function saveCart(){ localStorage.setItem('cart', JSON.stringify(cart)); }

function addToCart(id, qty=1, goCheckout=false){
  const p = (window.productos||[]).find(x=> x.id===id);
  if(!p) return;
  const item = cart.find(x=> x.id===id);
  if(item){ item.qty += qty; } else { cart.push({ id:p.id, nombre:p.nombre, precio:p.precio, img:p.imgs[0], qty: qty }); }
  saveCart();
  if(goCheckout){ window.location.href='checkout.html'; }
}

function buyNow(id){
  const p = (window.productos||[]).find(x=> x.id===id);
  if(!p) return;
  cart = [{ id:p.id, nombre:p.nombre, precio:p.precio, img:p.imgs[0], qty:1 }];
  saveCart();
  window.location.href='checkout.html';
}

function changeQuantity(id, delta){
  const it = cart.find(x=> x.id===id);
  if(!it) return;
  it.qty += delta;
  if(it.qty<=0){ cart = cart.filter(x=> x.id!==id); }
  saveCart(); renderCartTable();
}

function removeFromCart(id){
  cart = cart.filter(x=> x.id!==id);
  saveCart(); renderCartTable();
}

function renderCartTable(){
  const el = document.getElementById('cartTable');
  if(!el) return;
  if(cart.length===0){ el.innerHTML = '<p>Tu carrito está vacío.</p>'; return; }
  const total = cart.reduce((s,x)=> s + x.precio*x.qty, 0);
  el.innerHTML = cart.map(x=>`
    <div class="cart-row">
      <img src="${x.img}" alt="${x.nombre}" class="thumb">
      <div class="cart-info">
        <div class="cart-name">${x.nombre}</div>
        <div class="cart-qty">
          <button class="icon-btn qty minus" title="Disminuir" onclick="changeQuantity('${x.id}',-1)"><span>−</span></button>
          <span class="qty-val">${x.qty}</span>
          <button class="icon-btn qty plus" title="Aumentar" onclick="changeQuantity('${x.id}',1)"><span>+</span></button>
        </div>
      </div>
      <div class="cart-price">$${x.precio * x.qty}</div>
      <button class="icon-btn danger" title="Eliminar" onclick="removeFromCart('${x.id}')"><span>🗑</span></button>
    </div>
  `).join('') + `<div class="cart-total"><strong>Total:</strong> $${total}</div>`;
  const chk = document.getElementById('checkoutBtn');
  if(chk){ chk.onclick = () => { window.location.href='checkout.html'; }; }
}

window.addEventListener('DOMContentLoaded', renderCartTable);
