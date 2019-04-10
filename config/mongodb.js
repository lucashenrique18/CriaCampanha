require('../node_modules/dotenv/lib/main').config();

const mongodb = require('../node_modules/mongodb').MongoClient;

const url = `mongodb://${process.env.USER}:${process.env.PASS}@${process.env.HOST}:${process.env.PORT}/${process.env.DBNAME}`;
const database = new mongodb(url, {
    useNewUrlParser: true,
    useNewUrlParser: true,
    poolSize: 20,
    socketTimeoutMS: 480000,
    keepAlive: 300000,
    keepAliveInitialDelay: 300000,
    connectTimeoutMS: 30000,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000
});
var connDataBase = function (dados, res){
	database.connect(function (err) {
		if (err)
			res.status(500).json('ERROR CONECTION -- ' + err);
		else
			console.log('Connected successfully to MONGODB server')
	});
}

module.exports = connDataBase;

