const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000 || process.env.PORT;
const route = require('./route');
console.log(process.env.SECRET);
// middlewares
app.use(cors({
    credentials:true,
    origin:"*"
}));
app.use(express.json());
app.use(express.urlencoded({extended:false, limit:'20mb'}));
app.get('/',(req,res)=>{
    res.send("Welcome to fukbar server");
});
// routes
app.use('/person',route);

app.listen(port,()=>console.log(`Server up and running @port ${port}`));