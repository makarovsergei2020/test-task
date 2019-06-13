const express = require('express');
const app = express();

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('', express.static('img'));

app.get('/', function(req, res){
	res.json([{"key":"1","bookname":"Война и мир","author":"Лев Николаевич Толстой","date":"31.04.1867","src":"http://localhost:3001/exp1.jpg"},{"key":"2","bookname":"Винни Пух","author":"Алан Александр Милн","date":"01.10.1959","src":"http://localhost:3001/exp2.jpg"},{"key":"3","bookname":"Печи для дачи своими руками","author":"Поляков Илья Сергеевич","date":"21.07.2010","src":"http://localhost:3001/exp3.jpg"}]);
});

app.listen(3001);

