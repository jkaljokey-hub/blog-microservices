const express = require("express");
const os = require("os");
const fs = require("fs");
const { Client } = require("pg");
const { createClient } = require("redis");
const cors = require("cors");   // ⭐ ADD THIS

const app = express();
app.use(cors());                // ⭐ AND THIS

const PORT = 3000;

// PostgreSQL
const db = new Client({
  host: "postgres",
  port: 5432,
  user: "bloguser",
  password: fs.readFileSync(
    "/run/secrets/db_password",
    "utf8"
  ).trim(),
  database: "blog",
});

// Redis
const redis = createClient({
  url: "redis://redis:6379",
});

async function start() {
  try {
    await db.connect();
    console.log("✅ Connected to PostgreSQL Database");

    await redis.connect();
    console.log("✅ Connecteddd to Redis Database");

    await db.query(`
      CREATE TABLE IF NOT EXISTS posts(
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL
      );
    `);

    const count = await db.query("SELECT COUNT(*) FROM posts");

    if (count.rows[0].count === "0") {
      await db.query(`
        INSERT INTO posts(title)
        VALUES
        ('Docker Swarm'),
        ('PostgreSQL'),
        ('Redis'),
        ('Microservices');
      `);
    }

  } catch (err) {
    console.error(err);
  }
}

start();

app.get("/api/posts", async (req, res) => {
  try {
    const cache = await redis.get("posts");

    if (cache) {
      console.log("✅ Cache HIT");
      return res.json({
        source: "Redis7",
        hostname: os.hostname(),
        posts: JSON.parse(cache)
      });
    }

    console.log("❌ Cache MISS");

    const result = await db.query(
      "SELECT * FROM posts ORDER BY id"
    );

    await redis.set(
      "posts",
      JSON.stringify(result.rows),
      { EX: 60 }
    );

    res.json({
      source: "PostgreSQL",
      hostname: os.hostname(),
      posts: result.rows
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});

app.get("/health", async (req, res) => {
  try {
    await db.query("SELECT 1");
    await redis.ping();

    res.status(200).json({ status: "healthy" });

  } catch (err) {
    res.status(500).json({ status: "unhealthy" });
  }
});

// ⭐ Your new endpoint for frontend footer
app.get("/api/info", async (req, res) => {

  let database = "Connected";
  let redisStatus = "Connected";

  try {
    await db.query("SELECT 1");
  } catch {
    database = "Disconnected";
  }

  try {
    await redis.ping();
  } catch {
    redisStatus = "Disconnected";
  }

  res.json({
    api: "Online",
    hostname: os.hostname(),
    database,
    redis: redisStatus,
    time: new Date().toISOString()
  });

});
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
