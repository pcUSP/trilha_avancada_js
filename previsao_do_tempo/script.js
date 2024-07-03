const apiKey = 'YOUR_API_KEY'; // Substitua pelo seu próprio API Key
const weatherInfo = document.getElementById('weatherInfo');

const getWeather = async () => {
    const city = document.getElementById('city').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Não foi possível obter a previsão do tempo para esta cidade.');
        }
        const data = await response.json();
        const { name, main, weather } = data;
        const weatherDescription = weather[0].description;
        const temperature = main.temp;

        weatherInfo.innerHTML = `
            <h2>Previsão do Tempo para ${name}</h2>
            <p><strong>Temperatura:</strong> ${temperature} °C</p>
            <p><strong>Descrição:</strong> ${weatherDescription}</p>
        `;
    } catch (error) {
        console.error('Erro:', error.message);
        weatherInfo.innerHTML = '<p>Erro ao obter a previsão do tempo. Verifique o nome da cidade.</p>';
    }
};
