"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
require("dotenv").config();
// CREATE SERVER 
app_1.app.listen(3000, () => {
    console.log(`Server is connected with port 3000`);
});
