const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 80;

app.use('/static', express.static('static'))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).render('apk.ejs')
})



app.listen(port);