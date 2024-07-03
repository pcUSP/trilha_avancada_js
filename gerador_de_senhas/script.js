const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const passwordOutput = document.getElementById('passwordOutput');

const generatePassword = () => {
    const length = lengthInput.value;
    const includeUppercase = uppercaseInput.checked;
    const includeNumbers = numbersInput.checked;
    const includeSymbols = symbolsInput.checked;

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()-_=+';

    let validChars = lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    passwordOutput.value = password;
};
