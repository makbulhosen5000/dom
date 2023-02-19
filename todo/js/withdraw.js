function getInputValueById(getId){
    const inputField = document.getElementById(getId);
    const inputFieldStringValue = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldStringValue);
    inputField.value = '';
    return inputFieldAmount; 
    }
    
    function getTextElementById(elementId){
        const textElement = document.getElementById(elementId);
        const getTextElementString = textElement.innerText;
        const TextElementValue = parseFloat(getTextElementString);
        return TextElementValue;
    }
    function setTextElementValueById(elementId,newValue){
        const textElement = document.getElementById(elementId);
        textElement.innerText = newValue;
    }
    
    document.getElementById('btn-deposit').addEventListener('click',function(){
    
        const newDepositAmount = getInputValueById('deposit-filed');
        const depositTotal = getTextElementById('deposit-total');
    
        const newDepositTotal = newDepositAmount + depositTotal;
        setTextElementValueById('deposit-total',newDepositTotal);
    });