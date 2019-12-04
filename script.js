'use strict';

let money, time;

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: true
};

chooseExpenses();
chekSavings();
detectDayBudget();
detectLevel();
chooseOptExpenses();



function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time ;//= prompt('Введите дату в формате YYYY-MM-DD', '');

    while( isNaN(money) || money == '' || money == null ) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

function chooseExpenses() {
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
}

function chekSavings() {
    if ( appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

        appData.monthIncome = save/100/12*percent;
        alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Бюджет на 1 день: ${appData.moneyPerDay} `);
}

function detectLevel() {
    if ( appData.moneyPerDay < 100 ) {
        console.log('Минимальный уровень достатка');
    } else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
        console.log('Средний уровень достатка');
    } else if ( appData.moneyPerDay > 2000 ) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Ошибка');
    }
}

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let optExpenses = prompt('Статья необязательных расходов?', '');
        
        if ( (typeof(optExpenses)) === 'string' && (typeof(optExpenses)) != null && optExpenses != '' && optExpenses.length < 50 ) {
            appData.expenses[i] = optExpenses;
        } else {
            console.log('Попоробуй еще раз');
            i--;
        }  
    }
}