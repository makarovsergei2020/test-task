const express = require("express");
const app = express();
const path = require('path');

const booksData = [{
	"key": "1",
	"bookname": "Война и мир",
	"authorid": 1,
	"author": "Лев Николаевич Толстой",
	"date": "31.04.1867",
	"src": "/exp1.jpg"
}, {
	"key": "2",
	"bookname": "Винни Пух",
	"authorid": 2,
	"author": "Алн Александр Милн",
	"date": "01.10.1959",
	"src": "/exp2.jpg"
}, {
	"key": "3",
	"bookname": "Печи для дачи своими руками",
	"authorid": 3,
	"author": "Поляков Илья Сергеевич",
	"date": "21.07.2010",
	"src": "/exp3.jpg"
},
	{
	"key": "4",
	"bookname": "Тесты по программированию",
	"authorid": 8,
	"author": "Тест Петр Сергеевич",
	"date": "21.07.2010",
	"src": "http://localhost:3001/exp3.jpg"
	}
];

const authorsData = [{
	authorId: 1,
	name: "Лев Николаевич Толстой",
	dateOfBirth: "28.08.1828",
	dateOfDeath: "07.11.1910",
	photo: "/exp1.jpg"
},  {
	authorId: 2,
	name: "Алан Александр Милн",
	dateOfBirth: "18.01.188",
	dateOfDeath: "31.01.1956",
	photo: "/exp2.jpg"
},  {
	authorId: 3,
	name: "Поляков Илья Сергеевич",
	dateOfBirth: "19.12.1954",
	dateOfDeath: "13.06.2015",
	photo: "/exp3.jpg"
},  {
	authorId: 8,
	name: "Тест Петр Сергеевич",
	dateOfBirth: "19.12.1954",
	dateOfDeath: "13.06.2015",
	photo: "/exp3.jpg"
	}
];


app.all("/*", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.use('', express.static(path.resolve(__dirname, './img')));

app.get("/books", function (req, res) {
	res.json(booksData);
});

app.get("/authors/:authorId", function (req, res) {
	const authorId = parseInt(req.params.authorId);
	const author = authorsData.find((item) => (item.authorId === authorId));
	res.json(author);
});

app.listen(3001);

