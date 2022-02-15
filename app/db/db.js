const { pg } = require('pg');
require('dotenv').config();

// exports.pool = pg.Pool ({
// 	host: process.env.ENV_HOST,
// 	database: process.env.ENV_DB,
// 	user: process.env.ENV_USER,
// 	port: 5432,
// 	password: process.env.ENV_PASSWORD,
// });

const connection = new Client({
	connectionString: process.env.DATABASE_URL,  //DB情報を環境変数DATABASE_URLに変更
	host: process.env.ENV_HOST,
	database: process.env.ENV_DB,
	user: process.env.ENV_USER,
	port: 5432,
	password: process.env.ENV_PASSWORD,
});