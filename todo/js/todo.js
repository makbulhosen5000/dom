document.getElementById('add-btn').addEventListener('click',function(){
    const getInputValue = document.getElementById('input-field').value;
    const setInputValue = document.getElementById('set-value');
    const li = document.createElement('li');
    li.innerText = getInputValue;
    setInputValue.appendChild(li);
    // making new class for remove child element
    li.classList.add('list-item');
    const newClassAdded = document.getElementsByClassName('list-item');
    for (const iterator of newClassAdded) {
        iterator.addEventListener('click',function(e){
            e.target.parentNode.removeChild(e.target);
        });
    }

});


document.getElementById('change-value').addEventListener('click',function(){
   setInnerTextId('p-1','Bangladesh');
   setInnerTextId('p-2','India');
   setInnerTextId('p-3','Myanmar');
   setInnerTextId('p-4','Pakistan');
   const inputValue = getValueById('input-field');
   console.log(inputValue);
});
//function for value change
function setInnerTextId(id,value){
    document.getElementById(id).innerText = value;
}

function getValueById(id){
    const value = document.getElementById(id).value;
    return value;
}
