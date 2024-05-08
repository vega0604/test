const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

// app.listen(3000, () => {
//     console.log("listening on port 3000");
// });

module.exports = app;