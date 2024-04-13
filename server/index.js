const express = require('express');
const cors = require('cors');
const searchRouter = require('./routes/search');
const app = express();
app.use(cors());



app.use('/search', searchRouter);



const port = 3000;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
}); 