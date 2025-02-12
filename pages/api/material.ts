import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || '5432', 10),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM "material"');
    const material = result.rows;
    client.release();
    res.status(200).json(material);
  } catch (err) {
    console.error('Error al obtener los datos de la tabla Material:', err);
    res.status(500).json({ error: 'Error al obtener los datos de la tabla Material' });
  }
}