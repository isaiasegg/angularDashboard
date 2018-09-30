const bodyParser = require('body-parser');
const express = require('express');
const app = express(); 
const request = require('request');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('json spaces', 2); 

app.post('/api/login/', (req, res) => {
  if(req.body.email === 'admin' && req.body.password === 'admin'){
    res.json({ token: 'testTokenmretpkokermlcvdfjginvoiuhiudf' })
  } else { res.json({ msg: 'Usuario y/o clave incorrecta' }) }
}); 

app.get('/api/data/', (req, res) => {
  request.get('http://www.mocky.io/v2/5ba409112f00005b00968a9d', (err, response, body)=>{
    const data = JSON.parse(body); 
    res.json(data);
  })
}); 
 

app.use(express.static(__dirname + '/dist')); 

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

// Sets server port and logs message on success
let server = app.listen(process.env.PORT || 4000, function() {
  console.log('Listening on port %s', server.address().port);
});


