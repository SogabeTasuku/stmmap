const { Pool } = require('pg');

const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	ssl: { rejectUnauthorized: false }
});

get('/db', async (req, res) => {
	console.log("はろー、のーどじぇいえす！");
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM hotelmap');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })