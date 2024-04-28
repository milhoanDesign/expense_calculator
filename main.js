
// Select elements from the DOM
const expensesInput = document.getElementById('expense');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expensesList = document.getElementById('expensesList');
const expensesTotal = document.getElementById('totalExpenses');

// Initialize total expenses variable
let total = 0; 

// Function to update the UI with total expenses
function updateTotal () {
    totalExpenses.textContent = `Total expenses: ${total.toFixed(2)}`;
}; 

// Function to handle adding an expense
function addExpense () {
    // Get the value entered in the expense input field 
    const expenseAmount = parseFloat(expensesInput.value); 
};

// Check if the entered value is valid
if (isNaN(expenseAmount) || expenseAmount <= 0 ) {
    alert('Please enter a valid amount');
    return; 
}

// Add the expense to the total
total += expenseAmount;

// Update the UI to reflect the new total
updateTotal();

// Create a new list item to disply the added expense
const expenseItem = document.createElement('li');
expenseItem.textContent = `$${expenseAmount.toFixed(2)}`; 

// Append the new item to the list
expensesList.appendChild(expenseItem); 

// Clear the input field for the next value
expensesInput.value = ''; 

addExpenseBtn.addEventListener('click', addExpense); 