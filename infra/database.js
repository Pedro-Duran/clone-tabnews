import { Client } from "pg";
import { database } from "pg/lib/defaults";

async function query(queryOBject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
  });
  await client.connect();
  console.log(database);
  const result = await client.query(queryOBject);
  console.log(result.rows);
  await client.end();
  return result;
}
export default { query: query };
