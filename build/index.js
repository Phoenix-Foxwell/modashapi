"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const modesh_1 = require("./routers/modesh");
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = (0, express_1.default)();
//middlewhare
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
//routers
app.use(modesh_1.modeshRouter);
app.get("/", (req, res) => {
    res.send("welcome to my note application");
    res.end();
});
app.use((req, res, next) => {
    res.status(404).send("Error: Endpoint not found");
});
//routes
app.listen(PORT, () => {
    console.log(`Modash app listening on port ${PORT}`);
});
