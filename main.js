
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

// Function to format date as "mm/dd/yy"
function formatDate(dateString) {
    // Split the date string into its components
    const [year, month, day] = dateString.split('-');

    // Format the date components as "mm/dd/yy"
    return `${month}/${day}/${year.slice(-2)}`;
}

// Function to handle adding an expense
function addExpense () {
    // Get the value entered in the expense input field 
    const expenseAmount = parseFloat(expensesInput.value); 

    // Get the selected date value
    const expenseDate = document.getElementById('date').value;

// Check if the entered value is valid
if (isNaN(expenseAmount) || expenseAmount <= 0 || !expenseDate) {
    alert('Please enter a valid amount');
    return; 
}

// Add the expense to the total
total += expenseAmount;

// Update the UI to reflect the new total
updateTotal();

// Format the date
const formattedDate = formatDate(expenseDate);

// Create a new list item to disply the added expense
const expenseItem = document.createElement('li');
expenseItem.textContent = `$${expenseAmount.toFixed(2)} - ${expenseDate}`; 

// Prepend the new item to the beginning of the list
expensesList.insertBefore(expenseItem, expensesList.firstChild); 

// Clear the input field for the next value
expensesInput.value = ''; 
document.getElementById('date').value = ""; 

};


addExpenseBtn.addEventListener('click', addExpense); 