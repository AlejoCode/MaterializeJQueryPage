(function(){
    let cartInfo=document.getElementById('cart-info');
    let cart=document.getElementById('cart');
    cartInfo.addEventListener('click',function(){
        cart.classList.toggle('show-cart');
    })
})();
(function(){
    let cartBtn=document.querySelectorAll('.agregar-dato');
    cartBtn.forEach(function(btn){
        btn.addEventListener('click',(e)=>{
            //console.log(e.target);
            let guardarRuta=e.target.parentElement.previousElementSibling.previousElementSibling.childNodes[1].src
            console.log(guardarRuta);
            let pos=guardarRuta.indexOf("/img")
            let convRuta=guardarRuta.slice(pos)
            console.log(convRuta);
          

            let  item={};
            item.img=`img-cart${convRuta}`;
            let name=event.target.parentElement.parentElement.children[0].children[1].textContent
            item.name=name;
            let price=event.target.parentElement.parentElement.children[1].children[1].textContent
            let finalPrice=price.slice().trim();
            item.price=finalPrice
            console.log(item);

            const cartItem=document.createElement('div');
            cartItem.classList.add(
                'cart-item');
                cartItem.innerHTML=`
                <div class="cart-item ">
                         <img src="${item.img}" class="circle responsive-img" id="item-img" alt="">
                    <div class="item-text">
                        <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                        <span>$</span>
                        <span id="cart-item-price" class="cart-item-price">${item.price}</span>
                    </div>
                 </div>
                `;
                let cart=document.getElementById("cart");
                let total=document.querySelector('.cart-total-container')
                cart.insertBefore(cartItem,total);
                alert(' agrego un item al carro :D');
        })
    })
})();