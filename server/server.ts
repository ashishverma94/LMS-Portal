require("dotenv").config();
import { app } from "./app";
import connectDB from "./utils/db";

// CREATE SERVER
app.listen(3000, () => {
  console.log(`Server is connected with port 3000`);
  // connectDB();
});
