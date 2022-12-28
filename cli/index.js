require("dotenv").config();
const db = require("./db");

function printHelp() {
  console.log(`
usage: node cli "Book name"
  `);
}

function insertNovel(title) {
  const now = `${new Date().toISOString()}`;
  const insertText =
    "INSERT INTO novels (title, createdat, updatedat) VALUES ($1, $2, $3)";
  return db.query(insertText, [title, now, now]);
}

async function main() {
  const novelTitle = process.argv[2];
  if (!novelTitle) {
    printHelp();
    process.exit(1);
  }

  // const result = await db.query("SELECT NOW()");
  // console.log(result.rows[0]);
  await insertNovel(novelTitle);

  process.exit(0);
}

main();
