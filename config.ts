import dotenv from "dotenv";

dotenv.config();

let BACKEND_URL = process.env.NEXT_PUBLIC_SERVER_DEV;
if (process.env.NEXT_PUBLIC_ENV === "prod") {
  BACKEND_URL = process.env.NEXT_PUBLIC_SERVER_PROD;
}

export { BACKEND_URL };
