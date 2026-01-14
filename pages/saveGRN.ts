// pages/api/saveBooking.ts
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = await open({
    filename: "./db/crm_data.sqlite",
    driver: sqlite3.Database
  });

  // Create table if not exists
  await db.run(`CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT,
    project TEXT,
    location TEXT,
    amount REAL
  )`);

  if (req.method === "POST") {
    const { client_name, project, location, amount } = req.body;
    await db.run(
      "INSERT INTO bookings (client_name, project, location, amount) VALUES (?, ?, ?, ?)",
      client_name, project, location, amount
    );
    res.status(200).json({ success: true });
  } else if (req.method === "GET") {
    const rows = await db.all("SELECT * FROM bookings");
    res.status(200).json(rows);
  }

  await db.close();
}