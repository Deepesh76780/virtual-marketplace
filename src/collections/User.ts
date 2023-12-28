import { CollectionConfig } from "payload/types";

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => {
        return `
        <div>
          <h1>Verify your email</h1>
          <p>Click the link below to verify your email</p>
          <a href="http://localhost:3000/verify-email?token=${token}">Verify your email</a>
        </div>
        `;
      },
    },
  },
  access: {
    create: () => true,
    read: () => true,
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
