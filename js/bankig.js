document.getElementById('deposite-button').addEventListener('click', function(){

    //get the amount deposite
    const depositeInput = document.getElementById('my-deposite');
    const depositeAmount = parseFloat( depositeInput.value);
    const totalDeposite = document.getElementById('total-deposite');
    const preveousDepositeAmount = totalDeposite.innerText;
    const newDepositeTotal = parseFloat (preveousDepositeAmount) + depositeAmount;
    totalDeposite.innerText = (newDepositeTotal);

    // total balance deposite

    const totalBlance = document.getElementById('total-balance');
    const balanceTotal = totalBlance.innerText;
    const preveousBlance = parseFloat (balanceTotal);
    const newBlanceTotal = preveousBlance + newDepositeTotal;
    totalBlance.innerText = newBlanceTotal;

    //clear the deposite input Filed
    depositeInput.value = '';
})

 // //get the amount withdraw
 document.getElementById('Withdraw-button').addEventListener ('click', function(){
     const withdrawInput = document.getElementById('my-Withdraw')
     const withdrawAmount= parseFloat(withdrawInput.value);
     const totalWithdraw = document.getElementById('total-withdraw');
     const previousWithdraw = totalWithdraw.innerText;
     const newWithdraw = parseFloat(previousWithdraw )+ withdrawAmount;
     totalWithdraw.innerText = newWithdraw;

     // total balance withdraw

    const balanceTotal = document.getElementById('total-balance');
    const previousBalance = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat (previousBalance);
    const totalNewBalance = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = totalNewBalance;

     //clear the withdraw input Filed
     withdrawInput .value = '';
 })