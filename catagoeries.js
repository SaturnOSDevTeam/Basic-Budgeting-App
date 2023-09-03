const categories = ['Groceries', 'Entertainment', 'Transportation', 'Healthcare', 'Other'];

function displayCategories() {
  const categorySelect = document.getElementById('expense-category');
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}
