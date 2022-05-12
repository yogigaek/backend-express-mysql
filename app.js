const express = require(`express`);
const app = express();
const path = require(`path`);
const port = 3000;
const productRouterV1 = require(`./productV1/router`);
const productRouterV2 = require(`./productV2/router`);


// API mysql
app.use(`/api/v1`, productRouterV1);
// API sequelize
app.use(`/api/v2`, productRouterV2);

app.use('/public', express.static(path.join(__dirname, 'uploads')));
app.use(`/`, (req, res) => {
    res.status(404)
    // use tag html
    res.send(`<h1> Page not found </h1>`);
});


app.listen(port, () => {
    console.log(`http://localhost:${port}`) 
});