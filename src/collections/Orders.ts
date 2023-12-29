import { Access, CollectionConfig } from "payload/types";

const yourOwn: Access = ({ req: { user } }) => {
  if (user?.role === "admin") return true;

  return {
    user: {
      equals: user?.id,
    },
  };
};

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: {
    useAsTitle: "your Orders",
    description: "A summary of all your order in digitalCat",
  },
  access: {
    read: yourOwn,
    create: ({ req }) => req.user?.role === "admin",
    update: ({ req }) => req.user?.role === "admin",
    delete: ({ req }) => req.user?.role === "admin",
  },
  fields: [
    {
      name: "_isPaid",
      type: "checkbox",
      access: {
        read: ({ req }) => req.user?.role === "admin",
        create: () => false,
        update: () => false,
      },
      admin: {
        hidden: true,
      },
      required: true,
    },
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      admin: {
        hidden: true,
      },
      required: true,
    },
    {
      name: "product",
      type: "relationship",
      relationTo: "products",
      required: true,
      hasMany: true,
    },
  ],
};