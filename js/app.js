function expenseAndBalance(){
    
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('clothe-input').value;

    const total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    const totalOutput = document.getElementById('expense-total');
    const totalExpense = totalOutput.innerText;
    totalOutput.innerText = total;

    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;
    
    const totalBalance = income - total;

    const balance = document.getElementById('balance-total');
    balance.innerText = totalBalance;
    //conditions
    if(total > income || totalBalance == 0){
        alert('You are in debt');
        return balance.innerText = '00';     
    }
    else if(typeof incomeInput != 'number'){
        alert('Please enter a number');
    }
}




document.getElementById('calculation-button').addEventListener('click', function() {
    expenseAndBalance()
}) 

/* document.getElementById('calculation-button').addEventListener('click', function() {
    
    const foodInput = document.getElementById('food-input').value;
    const rentInput = document.getElementById('rent-input').value;
    const clothInput = document.getElementById('clothe-input').value;

    const total = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    const totalOutput = document.getElementById('expense-total');
    const totalExpense = totalOutput.innerText;
    totalOutput.innerText = total;

    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;
    const totalBalance = income - total;

    const balance = document.getElementById('balance-total');
    balance.innerText = totalBalance;
    
}) */