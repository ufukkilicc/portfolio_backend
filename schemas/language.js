export default {
  name: "language",
  title: "Language",
  type: "document",
  fields: [
    {
      name: "title",
      title: "title",
      type: "string",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
