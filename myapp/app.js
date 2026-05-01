const express = require('express');
app= express();
const port = 3000

app.use(express.json());

const routes= require('./routes');

app.use('/api',routes);

app.listen(port,()=>
{
    console.log(`Example app listening on port ${port}`);
})