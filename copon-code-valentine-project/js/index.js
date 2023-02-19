document.getElementById('rose-btn').addEventListener('click',function(){
  const quantity = getInputValue('rose-quantity');
  const price = document.getElementById('rose-price').innerText;
  const cost = parseFloat(quantity) * parseFloat(price);
  setInnerText('rose-price-total',cost);
  getTotal();


})
document.getElementById('ornaments-btn').addEventListener('click',function(){
  let quantity = getInputValue('ornaments-quantity');
  const price = document.getElementById('ornaments-price').innerText;
  const cost = parseFloat(quantity) * parseFloat(price);
  setInnerText('ornaments-price-total',cost);
  getTotal();


});
document.getElementById('teddy-btn').addEventListener('click',function(){
  const quantity = getInputValue('teddy-quantity');
  const price = document.getElementById('teddy-price').innerText;
  const cost = parseFloat(quantity) * parseFloat(price);
  setInnerText('teddy-price-total',cost);
  getTotal();

});
document.getElementById('chocolate-btn').addEventListener('click',function(){
  const quantity = getInputValue('chocolate-quantity');
  const price = document.getElementById('chocolate-price').innerText;
  const cost = parseFloat(quantity) * parseFloat(price);
  setInnerText('chocolate-price-total',cost);
  getTotal();

});

document.getElementById('diary-btn').addEventListener('click',function(){
  const quantity = getInputValue('diary-quantity');
  const price = document.getElementById('diary-price').innerText;
  const cost = parseFloat(quantity) * parseFloat(price);
  setInnerText('diary-price-total',cost);
  getTotal();

});
document.getElementById('love-btn').addEventListener('click',function(){
  const quantity = getInputValue('love-quantity');
  const price = document.getElementById('love-price').innerText;
  const cost = parseFloat(quantity) * parseFloat(price);
  setInnerText('love-price-total',cost);
  getTotal();
});

function getInputValue(id){
   const value = document.getElementById(id).value;
   return parseFloat(value);
}

function setInnerText(id,value){
    document.getElementById(id).innerText = value;
}

function getTotal(){
  const rose = document.getElementById('rose-price-total').innerText;
  const ornaments = document.getElementById('ornaments-price-total').innerText;
  const teddy = document.getElementById('teddy-price-total').innerText;
  const chocolate = document.getElementById('chocolate-price-total').innerText;
  const diary = document.getElementById('diary-price-total').innerText;
  const love = document.getElementById('love-price-total').innerText;

  const sum = parseFloat(rose) + parseFloat(ornaments) + parseFloat(teddy) + parseFloat(chocolate) + parseFloat(diary) + parseFloat(love);
  setInnerText('total-price',sum)

}

//percentage function
document.getElementById('promo-code-btn').addEventListener('click',function(){
  const promoCodeNumber = document.getElementById('promo-code-field').innerText;
  const promoCode = getInputValue('promo-code-field');
  if(promoCode == 100 && promoCode != NAN){
    const total = document.getElementById('total-price').innerText;
    const sum  = total - parseFloat(total) * 0.1;
    setInnerText('total-price',sum);
  }else{
     alert('Wrong Promo Code');
  }
})