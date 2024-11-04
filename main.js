import express from 'express';
import { engine } from 'express-handlebars';

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('home', {
        layout: false,
        randomNumber: Math.floor(Math.random() * 50),
        playerPoint: 0 // Adjust as needed
    });
});

app.listen(3000, function () {
    console.log('Server started on http://localhost:3000');
});


