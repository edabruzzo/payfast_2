const { Pool, Client } = require('pg')
const password = process.env['POSTGRES_PASSWORD'];
const connectionString = 'postgresql://postgres:'+password+'@localhost:5432/postgres'
const pool = new Pool({
  connectionString: connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})
