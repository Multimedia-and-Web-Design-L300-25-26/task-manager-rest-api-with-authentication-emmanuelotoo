import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongoServer;

if (!process.env.MONGO_URI_SET) {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongoServer.getUri();
  process.env.JWT_SECRET = "testsecretkey123";
  process.env.MONGO_URI_SET = "true";
}

if (mongoose.connection.readyState === 0) {
  await mongoose.connect(process.env.MONGO_URI);
}