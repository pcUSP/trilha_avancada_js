const imcForm = document.getElementById('imcForm');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const resultDiv = document.getElementById('result');

imcForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = '<p>Preencha o peso e altura corretamente.</p>';
        return;
    }

    const bmi = calculateBMI(weight, height);
    const bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = `
        <h2>Resultado do IMC</h2>
        <p>Seu IMC é: <strong>${bmi.toFixed(2)}</strong></p>
        <p>Categoria: <strong>${bmiCategory}</strong></p>
    `;
});

const calculateBMI = (weight, height) => {
    return weight / (height * height);
};

const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Abaixo do peso';
    if (bmi < 24.9) return 'Peso normal';
    if (bmi < 29.9) return 'Sobrepeso';
    return 'Obesidade';
};
