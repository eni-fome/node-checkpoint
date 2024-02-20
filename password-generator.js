const generatePassword = require('generate-password');

function generateRandomPassword() {
    // Generate the password using the generate() function
    const password = generatePassword.generate({
        length: 10,
        numbers: true,
        symbols: true,
        uppercase: true, 
        excludeSimilarCharacters: true,
    });
    
    console.log('Generated password:', password);
}

generateRandomPassword();
