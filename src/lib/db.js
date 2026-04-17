import "dotenv/config";
import pg from "pg";
const {Pool} = pg;
import {PrismaPg} from "@prisma/adapter-pg";
import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString});
const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({adapter});