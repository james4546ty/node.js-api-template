require('dotenv').config();
const fs = require('fs');
const path = require('path');
const db = require('../server/db');

const runSqlFile = async (file) => {
  const sql = fs.readFileSync(path.join(__dirname, file), 'utf-8');
  await db.query(sql);
  console.log(`Executed ${file}`);
};

(async () => {
  try {
    await runSqlFile('create_tables.sql');
    if (process.argv[2] === 'seed') {
      await runSqlFile('seed_internships.sql');
    }
    console.log('Migrations complete');
    process.exit(0);
  } catch (err) {
    console.error('Migration error:', err);
    process.exit(1);
  }
})();