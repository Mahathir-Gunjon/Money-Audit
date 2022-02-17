function getInputValue(idName) {
    let value = document.getElementById(idName).value;
    return value;
  }
  //  click handeler button of expense calclulation
  document.getElementById('calculation-button').addEventListener("click", function () {
    // variables
    const foodInput = getInputValue('food-input');
    const rentInput = getInputValue('rent-input');
    const clotheInput = getInputValue('clothe-input');
    const income = getInputValue('income-input');
    const totalExpense = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clotheInput);
    const remainingBalance = parseFloat(income) - totalExpense;
    if ((income <= 0 && Number.isInteger(income) == false) || income == " ") {
      alert("Please Enter a Valid Cash amount");
    } 
    else if (foodInput == "" || rentInput == "" || clotheInput == "") {
      alert("Fill all the expense Inputs");
    } 
    else if (remainingBalance < 1) {
      alert("You Don't have enough balance");
    } 
    else {
      document.getElementById('expense-total').textContent = totalExpense;
      document.getElementById('balance-total').textContent = remainingBalance;
    }
  });
  
  // savings part of the app
  document.getElementById('saving-button').addEventListener("click", function () {
    if (getInputValue('saving-input') == "") {
      alert("Fill the savings Input");
    } else {
      const balanceRemaine = parseFloat(getInputValue('income-input'));
      const savings = parseFloat(getInputValue('saving-input'));
      const savingsAmount = balanceRemaine * (savings / 100);
      document.getElementById('saving-amount').textContent = savingsAmount;
      // last balance remaining after savings
      const totalBalance = document.getElementById('balance-total').innerText;
      const leftBalance = totalBalance - savingsAmount;
      if (leftBalance < 1) {
        document.getElementById('remaining-amount').textContent =
          balanceRemaine - savingsAmount;
      } else {
        document.getElementById('remaining-amount').textContent = leftBalance;
      }
    }
  });
  