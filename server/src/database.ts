import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  user: "meuuser",
  password: "minhasenha",
  database: "meudb",
  port: 5432,
});
