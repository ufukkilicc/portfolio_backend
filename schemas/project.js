export default {
  name: "project",
  title: "Project",
  type: "document",
  initialValue: () => ({
    releaseDate: new Date(),
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "caption",
      title: "Caption",
      type: "string",
    },
    {
      name: "introduction",
      title: "Introduction",
      type: "text",
    },
    {
      name: "type",
      title: "Type",
      type: "string",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "logoImage",
      title: "Logo Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "githubLink",
      title: "Github Link",
      type: "string",
    },
    {
      name: "liveLink",
      title: "Live Link",
      type: "string",
    },
    {
      name: "themeColors",
      title: "Theme Colors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
      ],
    },

    {
      name: "stacks",
      title: "Stacks",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "stack" },
        },
      ],
    },
    {
      name: "languages",
      title: "Languages",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "language" },
        },
      ],
    },
  ],
};
