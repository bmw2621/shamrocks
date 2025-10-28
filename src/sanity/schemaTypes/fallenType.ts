import { defineField, defineType } from "sanity";

const fallenType = defineType({
  name: "fallen",
  title: "Fallen",
  type: "document",
  fields: [
    defineField({
      name: "roadName",
      title: "Road Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "firstName",
      title: "First Name",
      type: "string",
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});

export default fallenType;
