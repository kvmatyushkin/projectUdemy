let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', ''),
    necessarily = prompt('Введите обязательную статью расходов в этом месяц', ''),
    necessarilyMoney = prompt('Во сколько обойдется?'),
    appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses:{},
        income:[],
        savings: false
    };

appData.expenses[necessarily] = necessarilyMoney;

console.log( appData.expenses );

alert(`Бюджет на 1 день: ${(appData.budget - appData.expenses[necessarily]) / 30} `);