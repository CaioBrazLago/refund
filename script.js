const form = document.querySelector("form");
const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");
const expenseList = document.querySelector("ul");
const expenseTotal = document.querySelector("h2");
const myExpenses = document.querySelector("header span");

amount.addEventListener("input", () => {
  let value = amount.value.replace(/\D/g, "");

  value = Number(value) / 100;

  amount.value = formatCurrencyBRL(value);
});

function formatCurrencyBRL(value) {
  let formatValue = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formatValue;
}

form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  expenseAdd(newExpense);
  clearForm();
};

function expenseAdd(newExpense) {
  try {
    //criando li para a lista
    const expenseItem = document.createElement("li");
    expenseItem.classList.add("expense");

    //criando icone de imagem para a lista de forma dinamica.
    const expenseIcon = document.createElement("img");
    expenseIcon.setAttribute("src", `./img/${newExpense.category_id}.svg`);
    expenseIcon.setAttribute("alt", `${newExpense.category_name}`);

    // Montando a div com as informacoes de despesa
    const expeseInfo = document.createElement("div");
    expeseInfo.classList.add("expense-info");

    const expenseName = document.createElement("strong");
    expenseName.textContent = newExpense.expense;

    const categoryName = document.createElement("span");
    categoryName.textContent = newExpense.category_name;

    expeseInfo.append(expenseName, categoryName);

    // Criando a parte de valor da despesa junto com o icone de lixeira.
    const expenseAmount = document.createElement("span");
    const currencyCipher = document.createElement("small");
    expenseAmount.classList.add("expense-amount");
    currencyCipher.textContent = "R$";
    expenseAmount.append(
      currencyCipher,
      newExpense.amount.toUpperCase().replace("R$", ""),
    );

    const removeIcon = document.createElement("img");
    removeIcon.setAttribute("src", "./img/remove.svg");
    removeIcon.setAttribute("alt", "remover");
    removeIcon.classList.add("remove-icon");

    // Montando toda a lista
    expenseItem.append(expenseIcon, expeseInfo, expenseAmount, removeIcon);
    expenseList.append(expenseItem);

    countItens();
  } catch (e) {
    console.log(e);
    throw new Error("Nao foi possivel cadastrar a despesa");
  }
}

function countItens() {
  try {
    const itens = expenseList.children;
    let total = 0;
    const currencyCipher = document.createElement("small");
    currencyCipher.textContent = "R$";

    if (itens) {
      total = 0;
      let formatTotal = formatCurrencyBRL(total).replace("R$", "");

      expenseTotal.innerHTML = `<small>R$</small> ${formatTotal}`;
    }

    for (i = 0; i < itens.length; i++) {
      let item = itens[i].textContent;

      let formatAmount = item.replace(/[^\d,]/g, "").replace(",", ".");
      formatAmount = parseFloat(formatAmount);

      if (isNaN(formatAmount)) {
        throw new Error("Valor digitado nao e um numero");
      }

      total = total + Number(formatAmount);

      let formatTotal = formatCurrencyBRL(total).replace("R$", "");

      expenseTotal.innerHTML = `<small>R$</small> ${formatTotal}`;
    }

    myExpenses.textContent = itens.length;
  } catch (error) {
    console.log(error);
  }
}

expenseList.addEventListener("click", (event) => {
  console.log(event.target);

  if (event.target.classList.contains("remove-icon")) {
    const item = event.target.closest(".expense");

    console.log(item);

    item.remove();

    countItens();
  }
});

function clearForm() {
  expense.value = "";
  category.value = "";
  amount.value = "";

  expense.focus();
}
