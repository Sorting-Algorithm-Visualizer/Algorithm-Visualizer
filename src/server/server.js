// this is our server
const express = require('express');

const app = express();
const port = 3000;

// serve static files
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.status(200).send('got here');
});


app.post('/signin', (req, res) => {
    res.status(200)
});



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});