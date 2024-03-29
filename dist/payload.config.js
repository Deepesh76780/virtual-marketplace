"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_mongodb_1 = require("@payloadcms/db-mongodb");
var bundler_webpack_1 = require("@payloadcms/bundler-webpack");
var config_1 = require("payload/config");
var richtext_slate_1 = require("@payloadcms/richtext-slate");
var path_1 = __importDefault(require("path"));
var User_1 = require("./collections/User");
var products_1 = require("./collections/Products/products");
var Media_1 = require("./collections/Media");
var ProductFile_1 = require("./collections/ProductFile");
var Orders_1 = require("./collections/Orders");
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [User_1.Users, products_1.Products, Media_1.Media, ProductFile_1.ProductFile, Orders_1.Orders],
    routes: {
        admin: "/sell",
    },
    admin: {
        user: "users",
        bundler: (0, bundler_webpack_1.webpackBundler)(),
        meta: {
            titleSuffix: "- DigitalCat",
            favicon: "/favicon.ico",
            ogImage: "/thumbnail.jpg",
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: (0, richtext_slate_1.slateEditor)({}),
    db: (0, db_mongodb_1.mongooseAdapter)({
        url: process.env.MONGO_URL,
    }),
    typescript: {
        outputFile: path_1.default.resolve(__dirname, "payload-types.ts"),
    },
});
