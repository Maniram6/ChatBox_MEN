const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));



const messages = ['-- Center --'];


app.get('/', (req,res) => {
    res.render('home')
});

app.post('/', (req,res) => {
    console.log(req.body);
    res.redirect('/')
});


app.get('/p1', (req,res) => {
    res.render('person1', {messages})
});

app.post('/p1/response', (req,res) => {
    messages.unshift(req.body.response);
    res.redirect('/p1');
})



app.get('/p2', (req,res) => {
    res.render('person2', {messages})
});

app.post('/p2/response', (req,res) => {
    messages.push(req.body.response);
    res.redirect('/p2');
});


app.listen(3000)