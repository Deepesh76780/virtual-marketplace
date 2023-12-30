"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
exports.Users = {
    slug: "users",
    auth: {
        verify: {
            generateEmailHTML: function (_a) {
                var token = _a.token;
                return "\n        <div>\n          <h1>Verify your email</h1>\n          <p>Click the link below to verify your email</p>\n          <a href=\"http://localhost:3000/verify-email?token=".concat(token, "\">Verify your email</a>\n        </div>\n        ");
            },
        },
    },
    access: {
        create: function () { return true; },
        read: function () { return true; },
    },
    fields: [
        {
            name: "role",
            defaultValue: "user",
            required: true,
            type: "select",
            options: [
                {
                    label: "Admin",
                    value: "admin",
                },
                {
                    label: "User",
                    value: "user",
                },
            ],
        },
    ],
};
