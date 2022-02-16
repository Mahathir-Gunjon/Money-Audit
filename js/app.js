document.getElementById('calculation-button').addEventListener('click', function() {
    const foodInput = document.getElementById('food-input').value;
    const food = parseFloat(foodInput);
    const rantInput = document.getElementById('rent-input').value;
    const rant = parseFloat(rantInput);
    const clothInput = document.getElementById('clothe-input').value;
    const cloth = parseFloat(clothInput);

    const total = food + rant + cloth;
    const totalOutput = document.getElementById('expense-total');
    const totalExpense = totalOutput.innerText;
    totalOutput.innerText = total;

    const incomeInput = document.getElementById('income-input');
    const income = incomeInput.value;
    const totalBalanse = income - total;

    const balance = document.getElementById('balance-total');
    balance.innerText = totalBalanse;
    
})