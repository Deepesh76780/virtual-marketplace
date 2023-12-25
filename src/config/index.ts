export const PRODUCT_CATEGORY = [
  {
    label: "UI Design",
    value: "ui_design" as const,
    features: [
      {
        name: "Editor Pinks",
        href: "#",
        imageSrc: "/nav/v-design/mixed.jpg",
      },
      {
        name: "blue bettle",
        href: "#",
        imageSrc: "/nav/v-design/blue.jpg",
      },
      {
        name: "ratreo theme",
        href: "#",
        imageSrc: "/nav/v-design/purple.jpg",
      },
    ],
  },
  {
    label: "Icons",
    value: "icons" as const,
    features: [
      {
        name: "Favorite icon",
        href: "#",
        imageSrc: "/nav/icons/bestsellers.jpg",
      },
      {
        name: "New Arrivals",
        href: "#",
        imageSrc: "/nav/icons/new.jpg",
      },
      {
        name: "BestSelleing Icons",
        href: "#",
        imageSrc: "/nav/icons/picks.jpg",
      },
    ],
  },
];

export type Category = (typeof PRODUCT_CATEGORY)[number];
