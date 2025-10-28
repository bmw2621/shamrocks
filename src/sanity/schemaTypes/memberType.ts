import { defineField, defineType } from "sanity";

const memberType = defineType({
  name: "member",
  title: "Member",
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),
  ],
});

export default memberType;
