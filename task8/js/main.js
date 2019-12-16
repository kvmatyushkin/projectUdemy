'use strict';

let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    
    chooseIncome = document.querySelector('.choose-income'),
    savingsCheckBox = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

// console.log(monthSavingsValue);

let money, time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: false
};

startBtn.addEventListener('click', function(){
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');
    
    while( isNaN(money) || money == '' || money == null ) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }

    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;
        
        if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
            && a != '' && b != '' && a.length < 50 ) {
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('Попоробуй еще раз');
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optExpenses = optionalExpensesItem[i].value;
        
        if ( (typeof(optExpenses)) === 'string' && (typeof(optExpenses)) != null && optExpenses != '' && optExpenses.length < 50 ) {
            appData.expenses[i] = optExpenses;
            optionalExpensesValue.textContent += optExpenses + ' ';
        } else {
            console.log('Попоробуй еще раз');
            //i--;
        }  
    }
});

countBudgetBtn.addEventListener('click', function(){
    if (appData.budget != undefined) {
        appData.moneyPerDay = ( (appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if ( appData.moneyPerDay < 100 ) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if ( appData.moneyPerDay > 2000 ) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Ошибка';
    }
});

chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;

    if ((typeof(items)) !== 'string' || (typeof(items)) == null || items == ''){
        console.log('Некорректные данные или их нету');
    } else {
        appData.income = items.split(', ');
        // appData.income.push(prompt('Может что-то еще?', ''));
        // appData.income.sort();
    }
    
    incomeValue.textContent = appData.income;
});

savingsCheckBox.addEventListener('click', function(){
    if ( appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings =true;
    }
});

sumValue.addEventListener('input', function() {
    console.log(appData.savings);
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

