import { sql } from "drizzle-orm"
import {
  AnyPgColumn,
  boolean,
  pgEnum,
  pgSchema,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core"

export const keyStatus = pgEnum("key_status", [
  "default",
  "valid",
  "invalid",
  "expired",
])
export const keyType = pgEnum("key_type", [
  "aead-ietf",
  "aead-det",
  "hmacsha512",
  "hmacsha256",
  "auth",
  "shorthash",
  "generichash",
  "kdf",
  "secretbox",
  "secretstream",
  "stream_xchacha20",
])
export const factorType = pgEnum("factor_type", ["totp", "webauthn"])
export const factorStatus = pgEnum("factor_status", ["unverified", "verified"])
export const aalLevel = pgEnum("aal_level", ["aal1", "aal2", "aal3"])
export const codeChallengeMethod = pgEnum("code_challenge_method", [
  "s256",
  "plain",
])
export const equalityOp = pgEnum("equality_op", [
  "eq",
  "neq",
  "lt",
  "lte",
  "gt",
  "gte",
  "in",
])
export const action = pgEnum("action", [
  "INSERT",
  "UPDATE",
  "DELETE",
  "TRUNCATE",
  "ERROR",
])

export const recipes = pgTable("recipes", {
  id: uuid("id").defaultRandom().primaryKey().notNull(),
  userId: text("user_id"),
  ingredients: text("ingredients"),
  cookingTime: text("cooking_time"),
  people: text("people"),
  difficulty: text("difficulty"),
  content: text("content"),
  createdAt: timestamp("created_at", {
    withTimezone: true,
    mode: "string",
  }).defaultNow(),
  lowCalori: boolean("low_calori"),
  vegan: boolean("vegan"),
  paleo: boolean("paleo"),
})
