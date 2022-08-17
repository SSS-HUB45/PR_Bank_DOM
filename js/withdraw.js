// 1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // 2: get the withdraw amount from the withdraw input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // And make sure to convert the input into a number by using parseFloat
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // 7: clear the input field
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide valid input.');
        return;
    }

    // 3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // 5: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Balance Exceeded. Please update your balance.');
        return;
    }
    // 4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // calculate and set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // 6: calculate and set the new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})