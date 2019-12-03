let money = prompt('Ваш бюджет на месяц?', ''),
        time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses:{},
        income:[],
        savings: false
};

let exp1 = prompt('Введите обязательную статью расходов в этом месяц', ''),
        exp2 = prompt('Во сколько обойдется?', ''),
        exp3 = prompt('Введите обязательную статью расходов в этом месяц', ''),
        exp4 = prompt('Во сколько обойдется?', '');

appData.expenses[exp1] = exp2;
appData.expenses[exp3] = exp4;

console.log( appData.expenses );

alert(`Бюджет на 1 день: ${appData.budget / 30} `);