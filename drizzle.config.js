import "dotenv/config";

export default {
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "postgresql", // Ensure this is postgresql
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
