import { Pool } from 'pg';

export default new Pool ({
  max: 20,
  connectionString: 'postgres://postgres:1111@localhost:5432/englishForKids',
  idleTimeoutMillis: 30000
})
