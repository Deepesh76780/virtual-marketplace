"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var zod_1 = require("zod");
exports.schema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z
        .string()
        .min(8, { message: "Password must be at least 8 characters long" }),
});
