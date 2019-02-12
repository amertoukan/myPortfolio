const express = require ('express');
const path = require ('path');
const PORT = process.env.PORT || 4002;

const app = express();

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', (req, res) => {
    return res.send('pong');
});

if (process.env.NODE_ENV === 'production') {
    server.use(express.static('client/build')); 
    server.use('*', express.static('client/build')); // Added this     
  }


app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', index.html));
});


app.listen(PORT, ()=>{
    console.log("http://localhost:"+PORT);
});