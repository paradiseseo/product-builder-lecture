const lottoNumbersContainer = document.querySelector('.lotto-numbers');
const generateBtn = document.querySelector('.generate-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

// Initialize theme from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggleBtn.textContent = '☀️';
}

const toggleTheme = () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
};

themeToggleBtn.addEventListener('click', toggleTheme);

const getNumberColor = (number) => {
    if (number <= 10) return '#fbc400'; // Yellow
    if (number <= 20) return '#69c8f2'; // Blue
    if (number <= 30) return '#ff7272'; // Red
    if (number <= 40) return '#aaa'; // Gray
    return '#b0d840'; // Green
};

const generateLottoNumbers = () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getNumberColor(number);
        ball.style.animationDelay = `${index * 0.1}s`;
        lottoNumbersContainer.appendChild(ball);
    });
};

generateBtn.addEventListener('click', generateLottoNumbers);

// Initial generation
generateLottoNumbers();
