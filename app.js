//この２行はお決まりのやつ
const express = require('express');
const app = express();

// //ルーティング
// //「http://localhost:3000/」を指定したときに、「index.ejs」を表示する
// app.get('/', (req, res) => {
//   res.render('index.ejs');
// });

// -----------------------------------------------
//      Routing
// -----------------------------------------------
app.get('/', (req, res) => {
	//PostreSQL接続
		connection.query(
		'SELECT * FROM hotelmap', //発行するクエリ
		(error,result) => {
			if(error) throw err;
			res.render('index.ejs',{items:result.rows}); //クエリ結果をitemsとしてindex.ejsに渡す
		}
		);
	});
	
	// -----------------------------------------------
	//      postgresql設定
	// -----------------------------------------------
	const { Client } = require('pg');
	
	// --------  接続情報  -----------
	const connection = new Client({
		//接続先DB情報を記述
		host: 'ec2-3-232-22-121.compute-1.amazonaws.com',
		user: 'xurhkqgsyodxqc',
		password: 'fffcf3dd7d0006b481e7fbe7dd4ea8aa798191160232612d280cc76892fa6042',
		database: 'd6rjrinp7sgdmt'
	});
	
	// --------  接続  -----------
	connection.connect((err) => {
		//接続できなかったとき、エラーをコンソールに表示させる
		if(err){
			console.log('error connecting:' + err.stack);
			return;
		}
		//今回はわかりやすいように、接続に成功したらコンソールに「success」と表示されるようにします
		console.log('success');
	});

// -----------------------------------------------
//      port
// -----------------------------------------------
//LocalとHeroku接続先によってPORTを切り替える
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);