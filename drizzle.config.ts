import * as dotenv from "dotenv"
import type { Config } from "drizzle-kit"

dotenv.config()

export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_CONNECTION_STRING as string,
  },
} satisfies Config
