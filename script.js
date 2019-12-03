let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income:[],
    savings: false
};

let necessarily = prompt('Введите обязательную статью расходов в этом месяц', '');
let necessarilyMoney = prompt('Во сколько обойдется?');

appData.expenses.necessarily = necessarilyMoney;

console.log(`${(appData.budget - appData.expenses.necessarily) / 30}`);

alert(`Бюджет на 1 день: ${(appData.budget - appData.expenses.necessarily) / 30} `);