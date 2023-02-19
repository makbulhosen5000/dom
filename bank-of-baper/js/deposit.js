
document.getElementById('btn-deposit').addEventListener('click',function(){
  const depositField = document.getElementById('deposit-filed');
  const newDepositAmountString = depositField.value;
  //convert to float
  const newDepositAmount = parseFloat(newDepositAmountString);

  // clear the deposit value
  depositField.value = '';

  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;
  
  //balance total 
  const balanceTotalElement = document.getElementById('balance-total')
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
  
  const newBalanceTotal = previousBalanceTotalAmount + newDepositTotal;
  balanceTotalElement.innerText = newBalanceTotal;
  
});
