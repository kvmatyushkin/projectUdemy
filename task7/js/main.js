'use strict';

let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value'),
    dayBudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),

    optionalExpensesInput = document.getElementsByClassName('expenses-item'),

    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    
    chooseIncome = document.querySelector('.choose-income'),
    savingsCheckBox = document.querySelector('.savings'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    expensesBtn.onclick();
    
    console.log(chooseExpenses);

    let money, time;

// start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяц', ''),
                b = prompt('Во сколько обойдется?', '');
            
            if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != '' && b != '' && a.length < 50 ) {
                appData.expenses[a] = b;
            } else {
                console.log('Попоробуй еще раз');
                i--;
            }  
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(`Бюджет на 1 день: ${appData.moneyPerDay} `);
    },
    chekSavings: function() {
        if ( appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
            appData.monthIncome = save/100/12*percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
        }
    },
    detectLevel: function() {
        if ( appData.moneyPerDay < 100 ) {
            console.log('Минимальный уровень достатка');
        } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
            console.log('Средний уровень достатка');
        } else if ( appData.moneyPerDay > 2000 ) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Ошибка');
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i <= 3; i++) {
            let optExpenses = prompt('Статья необязательных расходов?', '');
            
            if ( (typeof(optExpenses)) === 'string' && (typeof(optExpenses)) != null && optExpenses != '' && optExpenses.length < 50 ) {
                appData.expenses[i] = optExpenses;
            } else {
                console.log('Попоробуй еще раз');
                i--;
            }  
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислить через запятую)', '');
        if ((typeof(items)) !== 'string' || (typeof(items)) == null || items == ''){
            console.log('Некорректные данные или их нету');
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?', ''));
            appData.income.sort();
        }
        appData.income.forEach((element, i) => {
            alert(`Способы доп. заработка: ${i+1} - ${element}`);
        });
    }
};

// for (let key in appData){
//     console.log(`Наша программа включает в себя данные: ${appData[key]}`);
// }

// appData.chooseExpenses();
// appData.chekSavings();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.chooseOptExpenses();



function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time ;//= prompt('Введите дату в формате YYYY-MM-DD', '');

    while( isNaN(money) || money == '' || money == null ) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}