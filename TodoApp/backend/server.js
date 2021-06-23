const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();

// const allowedOrigins = ['http://localhost:8080', 'http://localhost:4200']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error(`ORIGIN: ${origin} Not allowed by CORS`))
//     }
//   }
// }
// app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

function verifyToken(req, res, next) {
	const bearerHeader = req.headers["authorization"];
	if (typeof bearerHeader !== "undefined") {
		const bearerToken = bearerHeader.split(" ")[1];
		req.token = bearerToken;
		next();
	} else {
		res.sendStatus(403);
	}
}

// simple route
app.get("/", (req, res) => {
	res.json({ message: "todo app nodejs server is up!" });
});


app.post("/api/login", (req, res) => {
	const user = {
		id: 1,
		username: "john",
		email: "john@gmail.com"
	};
	jwt.sign({ user: user }, "secretkey", (err, token) => {
		res.json({
			token
		});
	});
});

app.post("/api/todos", verifyToken, (req, res) => {
	jwt.verify(req.token, "secretkey", (err, authData) => {
		if (err) {
			res.json({
				message:"ERROR on POST"
			})
			// res.sendStatus(403);
		} else {
			res.json({
				message: "POST created...",
				authData
			});
		}
	});
});



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});