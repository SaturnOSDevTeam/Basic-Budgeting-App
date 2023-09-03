import { getCurrentUser, login, logout } from './auth.js';
import { displayCategories } from './categories.js';

const expenseList = document.getElementById('expense-list');
const expenseTitleInput = document.getElementById('expense-title');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseCategoryInput = document.getElementById('expense-category');
const addExpenseButton = document.getElementById('add-expense');
const totalExpenseSpan = document.getElementById('total-expense');
const budgetLimitInput = document.getElementById('budget-limit');
const budgetWarning = document.getElementById('budget-warning');
const loginButton = document.getElementById('login-button');
const logoutButton = document.getElementById('logout-button');
const userGreeting = document.getElementById('user-greeting');

let expenses = [];
let totalExpense = 0;
let budgetLimit = 0;

// Load expenses from localStorage on page load
loadExpensesFromLocalStorage();
displayCategories();

addExpenseButton.addEventListener('click', () => {
  if (getCurrentUser()) {
    const title = expenseTitleInput.value;
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    if (title && amount && category) {
      const expense = { title, amount, category };
      expenses.push(expense);

      totalExpense += amount;
      updateTotalExpense();
      updateBudgetWarning();

      updateExpenseList();
      clearInputs();
      saveExpensesToLocalStorage();
    }
  } else {
    alert('Please log in to add expenses.');
  }
});

budgetLimitInput.addEventListener('input', () => {
  budgetLimit = parseFloat(budgetLimitInput.value) || 0;
  updateBudgetWarning();
});

loginButton.addEventListener('click', () => {
  const username = prompt('Enter your username:');
  const password = prompt('Enter your password:');
  if (login(username, password)) {
    userGreeting.textContent = `Hello, ${getCurrentUser().username}!`;
    loginButton.style.display = 'none';
    logoutButton.style.display = 'inline';
  } else {
    alert('Login failed. Please check your credentials.');
  }
});

logoutButton.addEventListener('click', () => {
  logout();
  userGreeting.textContent = '';
  loginButton.style.display = 'inline';
  logoutButton.style.display = 'none';
});

function loadExpensesFromLocalStorage() {
  // ... (existing code) ...
}

function saveExpensesToLocalStorage() {
  // ... (existing code) ...
}

function updateExpenseList() {
  // ... (existing code) ...
}

function calculateTotalExpense() {
  // ... (existing code) ...
}

function updateTotalExpense() {
  // ... (existing code) ...
}

function updateBudgetWarning() {
  // ... (existing code) ...
}

function clearInputs() {
  // ... (existing code) ...
}
