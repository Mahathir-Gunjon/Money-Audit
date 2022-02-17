// function to calculate the total balance
function expenseAndBalance(balanceMoney, ) {
    
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('clothe-input').value;
    // total expenses
    const total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    const totalExpenseOutput = document.getElementById('expense-total');
    totalExpenseOutput.innerText = total;
    // total balance
    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;
    const totalBalance = income - total;
    const balance = document.getElementById(balanceMoney);
    balance.innerText = totalBalance;
    // error handling start here
    //conditions to check if the user has enough money to buy the item
    if(foodInput.value == '' || rentInput.value == '' || clothInput.value == ''){
        alert('Please enter valid expensed amount');
        foodInput.style.color = 'red';
    }
    else if(incomeInput.value <= 0 && Number.isInteger(incomeInput.value) == false || incomeInput.value == ''){
        alert('Please enter valid cash amount');
    }
    else if(totalBalance < 0){
    alert('Your don\'t have enough money to pay your expenses');   
    }
}
function saveMoney(moneySave){
    //saving amount from the balamce
    const savingInput = document.getElementById(moneySave).value;
    const saving = document.getElementById('saving-amount');
    saving.innerText = parseFloat(savingInput) -;

  
}
document.getElementById('calculation-button').addEventListener('click', function() {
    expenseAndBalance('balance-total')
}) 

document.getElementById('saving').addEventListener('click', function() {
    saveMoney('saving-input')
})






/* document.getElementById('calculation-button').addEventListener('click', function() {
    
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('clothe-input').value;

    const total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    const totalExpenseOutput = document.getElementById('expense-total');
    const totalExpense = totalExpenseOutput.innerText;
    totalExpenseOutput.innerText = total;

    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;
    const totalBalance = income - total;

    const balance = document.getElementById('balance-total');
    balance.innerText = totalBalance;

    document.getElementById('saving').addEventListener('click', function() {
        const savingInput = document.getElementById('saving-input').value;
        const saving = parseFloat(savingInput) % parseFloat(totalBalance);
        console.log(saving);
    })
})
 */