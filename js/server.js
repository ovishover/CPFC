const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Для обробки статичних файлів (наприклад, index.html)

// Підключення до бази даних
const db = new sqlite3.Database('mydatabase.db');

// Обробник відображення форми
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Обробник POST-запиту для додавання даних до бази даних
app.post('/addData', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    // Вставка даних до бази даних
    const insertQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';
    db.run(insertQuery, [name, email], (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send('Data added successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
