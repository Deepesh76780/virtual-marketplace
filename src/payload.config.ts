import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { buildConfig } from "payload/config";
import { slateEditor } from "@payloadcms/richtext-slate";
import path from "path";
import { Users } from "./collections/User";
import { Products } from "./collections/Products/products";
import { Media } from "./collections/Media";
import { ProductFile } from "./collections/ProductFile";
import { Orders } from "./collections/Orders";

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
  collections: [Users, Products, Media, ProductFile, Orders],
  routes: {
    admin: "/sell",
  },

  admin: {
    user: "users",
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- DigitalHippo",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGO_URL!,
  }),

  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
