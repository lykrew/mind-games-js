// знакомство
const readline = require('readline'); // колхозим по максимуму

const r1 = readline.createInterface({
    input: process.stdin, // ввод
    output: process.stdout // вывод
});

const greetings = () => {
    console.log('Привет, это игры разума!');
    r1.question('Как тебя зовут? ', (name) => { // ввод имени
        console.log(`Привет, ${name}! Добро пожаловать`);
        showMenu(name); // показываем меню
    });
};

// меню
const showMenu = (name) => {
    console.log('\n --- ИГРЫ РАЗУМА ---');
    console.log('1. calc - Калькулятор');
    console.log('2. progression - Прогрессия');
    console.log('3. even - Четное число');
    console.log('4. gcd - Наибольший общий делитель');
    console.log('5. prime - Простое число');
    r1.question('Выбери игру (или exit): ', (choice) => {
        startGame(choice, name);
    });
}

const startGame = (choice, name) => {
    choice = choice.toLowerCase();

    switch(choice) {
        case '1':
        case 'calc':
            calcGame(name);
            break;
        case 'exit':
            console.log('Пока!');
            r1.close();
            break;
        default:
            console.log('Не понял. Попробуй еще раз!');
            showMenu(name);
    }
};

// калькулятор


const calcGame = (name) => {

    const examples = [
        {question: "2 + 2", answer: 4},
        {question: "2 + 3", answer: 5},
        {question: "2 + 4", answer: 6},
    ];

    let round = 0;

    const startPlay = () => {
        if (round >= 3) {
            console.log(`Congratulations, ${name}!`);
            r1.close();
            return;
        };

        const example = examples[round];
        console.log(`Question: ${example.question}`);
        r1.question('Your answer: ', (userAnswer) => {
            if (parseInt(userAnswer) === example.answer) {
                console.log("good");
                round++;
                startPlay();
            } else {
                console.log("try again");
                r1.close();
            }
        });
    };
    startPlay();
};

greetings();
// прогрессия
// определение четного числа
// определение наибольшего общего делителя
// определение просто числа