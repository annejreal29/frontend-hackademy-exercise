// alert("hello world")
// Mock database
let expenses = [
  {
    "id": 1,
    "title": "Rent",
    "amount": 1000
  },
  {
    "id": 2,
    "title": "Grocery",
    "amount": 200
  },
  {
    "id": 3,
    "title": "Utilities",
    "amount": 150
  },
  {
    "id": 4,
    "title": "Transportation",
    "amount": 100
  },
  {
    "id": 5,
    "title": "Entertainment",
    "amount": 50
  }
]

let amountArray = [];
let index = 0;

expenses.forEach((expense) =>{
  let table = document.getElementById('table');

  let row = table.insertRow(-1);

  let title = row.insertCell(0);
  let amount = row.insertCell(1);
  
  title.innerText += `${expense.title}`;
  amount.innerText += `${expense.amount}`;
  
  amountArray[index] = `${expense.amount}`;
  index++;  
})

let amountArrayNum = [];
for (let i = 0; i < amountArray.length; i++) {
  amountArrayNum.push(parseInt(amountArray[i]));
}

let sum = 0;
for (const item of amountArrayNum) {
  sum += item;
}

document.getElementById('totalExpense').innerHTML = "Total Expense Php "+ sum;
