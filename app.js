const addBudgetBtn = document.getElementById('addBudgetBtn');
const addExpenseBtn = document.getElementById('addExpenseBtn');

const totalAmountInput = document.getElementById('totalAmountInput');
const titleInput = document.getElementById('titleInput');
const costInput = document.getElementById('costInput');

const budgetCount = document.getElementById('budgetCount');
const expenseCount = document.getElementById('expenseCount');
const balanceCount = document.getElementById('balanceCount');
const expenseUl = document.querySelector('ul');
const curList = document.getElementById('currencies');
const curInput = document.getElementById('curInput');
const API_URL = "https://api.exchangerate.host/latest?base=PLN";

let currencies = [];

fetch(API_URL)
  .then((res) => res.json())
  .then((res) => {
      for (key of Object.keys(res.rates)) {
          let curListItem = document.createElement('option');
          curListItem.innerHTML = key;
          curList.append(curListItem);
    }
  });

let budgetVal = [];

const addBudget = () => {
  let budgetValue = parseInt(totalAmountInput.value);

  fetch(API_URL)
  .then((res) => res.json())
  .then((res) => {
    for([key, value] of Object.entries(res.rates)){
        if (curInput.value === key) {
          budgetValue *= value;
          budgetCount.innerHTML = budgetValue;
        }
      } 
  });

  budgetVal.push(budgetValue);
  
  totalAmountInput.value = '';

  if(budgetValue !== budgetVal[budgetVal.slice(-1)]){
    balanceCount.innerHTML = budgetVal.slice(-1)[0] - count;
  }

};

let count = 0;
const addExpense = () => {
  let itemTitle = titleInput.value;
  let itemCost = parseInt(costInput.value);
  let newLi = document.createElement('li');
  let editBtn = document.createElement('button');
  let delBtn = document.createElement('button');
  editBtn.innerHTML = `<img class="edit-btn" src="https://cdn-icons-png.flaticon.com/512/6065/6065488.png" alt="edit-button-img">`;
  editBtn.className = 'edit-btn';
  delBtn.innerHTML = `<img class="del-btn" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNTY4LjM5IDI0Mi44MWgtMTAzLjZ2LTQ0LjM5OGMtMC4wMDc4MTMtNy44NDc3LTMuMTI4OS0xNS4zNzEtOC42Nzk3LTIwLjkyMi01LjU0NjktNS41NDY5LTEzLjA3LTguNjY4LTIwLjkxOC04LjY3OTdoLTExOC4zOWMtNy44NDc3IDAuMDExNzE4LTE1LjM3MSAzLjEzMjgtMjAuOTIyIDguNjc5Ny01LjU0NjkgNS41NTA4LTguNjY4IDEzLjA3NC04LjY3OTcgMjAuOTIydjQ0LjM5OGgtMTAzLjU5Yy01LjI4OTEgMC0xMC4xNzIgMi44MjAzLTEyLjgxNiA3LjM5ODRzLTIuNjQ0NSAxMC4yMTkgMCAxNC44MDFjMi42NDQ1IDQuNTc4MSA3LjUyNzMgNy4zOTg0IDEyLjgxNiA3LjM5ODRoNDQuMzk4djI4MS4xOWMwLjAwNzgxMyA3Ljg0NzcgMy4xMjg5IDE1LjM3MSA4LjY3OTcgMjAuOTIyIDUuNTQ2OSA1LjU0NjkgMTMuMDcgOC42NjggMjAuOTE4IDguNjc1OGgyMzYuNzljNy44NDM4LTAuMDA3ODEyIDE1LjM2Ny0zLjEyODkgMjAuOTE4LTguNjc1OCA1LjU0NjktNS41NTA4IDguNjcxOS0xMy4wNzQgOC42Nzk3LTIwLjkyMnYtMjgxLjE5aDQ0LjM5OGM1LjI4NTIgMCAxMC4xNzItMi44MjAzIDEyLjgxNi03LjM5ODQgMi42NDQ1LTQuNTgyIDIuNjQ0NS0xMC4yMjMgMC0xNC44MDEtMi42NDQ1LTQuNTc4MS03LjUzMTItNy4zOTg0LTEyLjgxNi03LjM5ODR6bS0yNTEuNTktNDQuMzk4aDExOC4zOXY0NC4zOThoLTExOC4zOXptMTc3LjYxIDM1NS4xOGgtMjM2Ljh2LTI4MS4xOWgyMzYuNzl6Ii8+CiAgPHBhdGggZD0ibTM0Ni40IDI4Ny4yYy0zLjkyNTggMC03LjY5MTQgMS41NTg2LTEwLjQ2NSA0LjMzNTktMi43NzczIDIuNzczNC00LjMzNTkgNi41MzkxLTQuMzM1OSAxMC40NjV2MjIxLjk5YzAgNS4yODUyIDIuODI0MiAxMC4xNzIgNy40MDIzIDEyLjgxNnMxMC4yMTkgMi42NDQ1IDE0Ljc5NyAwYzQuNTgyLTIuNjQ0NSA3LjQwMjMtNy41MzEyIDcuNDAyMy0xMi44MTZ2LTIyMS45OWMwLTMuOTI1OC0xLjU1ODYtNy42OTE0LTQuMzM1OS0xMC40NjUtMi43NzM0LTIuNzc3My02LjUzOTEtNC4zMzU5LTEwLjQ2NS00LjMzNTl6Ii8+CiAgPHBhdGggZD0ibTQwNS42IDI4Ny4yYy0zLjkyNTggMC03LjY5MTQgMS41NTg2LTEwLjQ2OSA0LjMzNTktMi43NzM0IDIuNzczNC00LjMzMiA2LjUzOTEtNC4zMzIgMTAuNDY1djIyMS45OWMwIDUuMjg1MiAyLjgyMDMgMTAuMTcyIDcuMzk4NCAxMi44MTYgNC41ODIgMi42NDQ1IDEwLjIyMyAyLjY0NDUgMTQuODAxIDBzNy4zOTg0LTcuNTMxMiA3LjM5ODQtMTIuODE2di0yMjEuOTljMC4wMDM5MDYtMy45MjU4LTEuNTU4Ni03LjY5MTQtNC4zMzItMTAuNDY1LTIuNzc3My0yLjc3NzMtNi41MzkxLTQuMzM1OS0xMC40NjUtNC4zMzU5eiIvPgogIDxwYXRoIGQ9Im00NTAgNDc5LjZjMCA1LjI4NTIgMi44MjAzIDEwLjE3MiA3LjM5ODQgMTIuODE2IDQuNTc4MSAyLjY0NDUgMTAuMjE5IDIuNjQ0NSAxNC44MDEgMCA0LjU3ODEtMi42NDQ1IDcuMzk4NC03LjUzMTIgNy4zOTg0LTEyLjgxNnYtMTQ4YzAtNS4yODUyLTIuODIwMy0xMC4xNzItNy4zOTg0LTEyLjgxNi00LjU4Mi0yLjY0MDYtMTAuMjIzLTIuNjQwNi0xNC44MDEgMC00LjU3ODEgMi42NDQ1LTcuMzk4NCA3LjUzMTItNy4zOTg0IDEyLjgxNnoiLz4KICA8cGF0aCBkPSJtMjg3LjIgMzE2LjhjLTMuOTIxOSAwLTcuNjg3NSAxLjU1ODYtMTAuNDY1IDQuMzMyLTIuNzczNCAyLjc3NzMtNC4zMzIgNi41NDMtNC4zMzIgMTAuNDY1djE0OGMwIDUuMjg1MiAyLjgyMDMgMTAuMTcyIDcuMzk4NCAxMi44MTYgNC41NzgxIDIuNjQ0NSAxMC4yMjMgMi42NDQ1IDE0LjgwMSAwIDQuNTc4MS0yLjY0NDUgNy4zOTg0LTcuNTMxMiA3LjM5ODQtMTIuODE2di0xNDhjMC0zLjkyMTktMS41NTg2LTcuNjg3NS00LjMzMi0xMC40NjUtMi43NzczLTIuNzczNC02LjU0My00LjMzMi0xMC40NjktNC4zMzJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=" alt="Delete button Icon 2747965" class="styles__Image-sc-2erpfv-1 gbnltd">`;
  delBtn.className = 'del-btn';
  newLi.className = 'expense-li';

  newLi.innerHTML = `<span class="li-text">${itemTitle} - ${itemCost}zl</span>`;
  newLi.appendChild(editBtn);
  newLi.appendChild(delBtn);
  expenseUl.insertAdjacentElement("beforeend", newLi);

  count += itemCost;
  expenseCount.innerHTML = count;
  
  balanceCount.innerHTML = budgetVal.slice(-1)[0] - count;

  titleInput.value = '';
  costInput.value = '';

  const editHandler = (e) => {
    let itemToEdit = e.target.closest('li');
      do{
        count -= itemCost;
        balanceCount.innerHTML = budgetVal.slice(-1)[0] + count;
        itemTitle = window.prompt("Enter the new expense");
        itemCost = window.prompt("Enter the new cost");
        count += parseInt(itemCost);
        expenseCount.innerHTML = count;
        balanceCount.innerHTML = budgetVal.slice(-1)[0] - count;
        itemToEdit.innerHTML = `<span class="li-text">${itemTitle} - ${itemCost}zl</span>`;
      }
      while(itemToEdit.innerHTML === "");
      itemToEdit.appendChild(editBtn);
      itemToEdit.appendChild(delBtn);
  };

  const deleteHandler = (e) => {
    let itemToDelete = e.target.closest('li');
    expenseUl.removeChild(itemToDelete);
    count -= itemCost;
    balanceCount.innerHTML = budgetVal.slice(-1)[0] + count;
    expenseCount.innerHTML = count;
  };

  editBtn.addEventListener('click', editHandler);
  delBtn.addEventListener('click', deleteHandler);
};


addBudgetBtn.addEventListener('click', addBudget);
addExpenseBtn.addEventListener('click', addExpense);

