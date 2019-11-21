let express = require('express')
let bodyParser = require('body-parser')
let jsonParse = bodyParser.json()
let urlEncoded = bodyParser.urlencoded({extended: false})
let router = require('./router')
let app = express()

app.use(jsonParse)
app.use(urlEncoded)

app.all("*",function(req, res, next){
	res.header("Access-Control-Allow-Origin", "*");
	// res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPIONS");
	res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With");
	// res.header("Access-Control-Expose-Headers", "*");
	next();
})
app.post('/login', router.login)
app.listen(3000,function(){
  console.log('port : 3000')
})