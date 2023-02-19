//first card doing by id
//getting id of button by addEvenListener function

let count = 0;
document.getElementById('first-card').addEventListener('click',function(){
    //getting data from html by id
    count += 1 ;
    const productName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantity = document.getElementById('first-quantity').innerText;
    
    //multiple of product
    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);
     //call the function for showing data for first card
     displayData(productName,productPrice,productQuantity,totalPrice);
     disabledFunction('first-card');
});


//second card doing by event.target(e)

document.getElementById('second-card').addEventListener('click',function(e){
    const productName = e.target.parentNode.parentNode.children[0].innerText;
    const productPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;
    
    //sum of product
    const totalPrice = parseInt(productPrice) + parseInt(productQuantity);
    displayData(productName,productPrice,productQuantity,totalPrice);
    disabledFunction('second-card');

});

//3rd card doing by id
document.getElementById('3rd-card').addEventListener('click',function(){
    //getting data from html by id
    const productName = document.getElementById('3rd-name').innerText;
    const productPrice = document.getElementById('3rd-price').innerText;
    const productQuantity = document.getElementById('3rd-quantity').innerText;
    
    //multiple of product
    const totalPrice = parseInt(productPrice) - parseInt(productQuantity);
     //call the function for showing data for 3rd card
     displayData(productName,productPrice,productQuantity,totalPrice);
       disabledFunction('3rd-card');
});


// last card
document.getElementById('last-card').addEventListener('click',function(){
    const productName = document.getElementById('last-title').innerText;
    const productPriceField = document.getElementById('price-input-field').value;
    const productQuantityField = document.getElementById('quantity-input-field').value;
    
    if(productPriceField <= 0 && productQuantityField <= 0){
        return alert("Please Provide Valid Input!");
    }

    //multiple of product
    const totalPrice = parseFloat(productPriceField) / parseFloat(productQuantityField);
    displayData(productName,productPriceField,productQuantityField,totalPrice);
    disabledFunction('last-card');
})





//common function to display data 
function displayData(productName,productPrice,productQuantity,priceTotal){
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML =
    `
    <td>${count}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${priceTotal}</td>
    `;
    container.appendChild(tr);
}

//disabled button set by setAttribute
function disabledFunction(id){
     document.getElementById(id).setAttribute('disabled',true);
}

//sum of the total 
function sumOfTotal()
{
    
}