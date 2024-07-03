const apiKey = 'YOUR_API_KEY'; // Substitua pelo seu próprio API Key
const amountInput = document.getElementById('amount');
const currencySelect = document.getElementById('currency');
const convertedAmountDiv = document.getElementById('convertedAmount');

const convertCurrency = async () => {
    const amount = amountInput.value;
    const currency = currencySelect.value;
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Não foi possível obter as taxas de câmbio.');
        }
        const data = await response.json();
        const conversionRate = data.conversion_rates[currency];
        const convertedAmount = (amount * conversionRate).toFixed(2);

        convertedAmountDiv.innerHTML = `
            <h2>Valor Convertido</h2>
            <p>${amount} USD é aproximadamente ${convertedAmount} ${currency}</p>
        `;
    } catch (error) {
        console.error('Erro:', error.message);
        convertedAmountDiv.innerHTML = '<p>Erro ao converter moeda. Verifique a conexão ou tente novamente mais tarde.</p>';
    }
};
