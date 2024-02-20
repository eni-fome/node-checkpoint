const fs = require('fs');


// Create welcome.txt
// fs.writeFile('welcome.txt', 'Hello Node', (err) => {
//     if (err) {
//         console.error('Error creating file:', err);
//         return;
//     }
//     console.log('File "welcome.txt" created successfully!');
// });


// Read data from welcome.txt
fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('Data read from welcome.txt:', data);
});