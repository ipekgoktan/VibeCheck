"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.get('/', (req, res) => {
    return res.json({ message: 'hi World' });
});
routes.get('/', (req, res) => {
    return res.json({ message: 'test test' });
});
exports.default = routes;
//# sourceMappingURL=routes.js.map