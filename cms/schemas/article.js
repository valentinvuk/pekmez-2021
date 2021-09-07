export default {
  name: "article",
  type: "document",
  title: "Article",
  fields: [
    {
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: (article) => article.name + "-" + article.flavour,
        maxLength: 64,
      },
    },
    {
      name: "flavour",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required().min(5).max(32),
    },

    {
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
