import { defineField, defineType } from "sanity";

const officerType = defineType({
  name: "officer",
  title: "Officer",
  type: "document",
  fields: [
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      options: {
        list: [
          { title: "Commander", value: "commander" },
          { title: "Executive Officer", value: "xo" },
          { title: "Secretary", value: "sec" },
          { title: "Treasurer", value: "treasurer" },
          { title: "Sergeant-At-Arms", value: "saa" },
          { title: "Public Relations Officer", value: "pro" },
          { title: "Road Captain", value: "rc" },
          { title: "Quartermaster", value: "qm" },
          { title: "Chaplain", value: "chaplain" },
          { title: "Webmaster", value: "webmaster" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "roadName",
      title: "Road Name",
      type: "reference",
      to: [{ type: "member" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default officerType;
