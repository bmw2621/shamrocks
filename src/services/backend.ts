import { IcalParsed, IcalShaped } from "@/app/typedefs/bandCal";
import {
  ChapterMember,
  ChapterOfficer,
  ChapterPosition,
} from "@/app/typedefs/cms";
import { sanityClient } from "@/sanity/lib/client";
import ICAL from "ical.js";

const officerOrder: ChapterPosition[] = [
  "commander",
  "xo",
  "sec",
  "saa",
  "treasurer",
  "chaplain",
  "pro",
  "rc",
  "qm",
  "webmaster",
];

export const getOfficers = async () => {
  const officers = await sanityClient.fetch<ChapterOfficer[]>(`
        *[_type == "officer"]{
            position,
            roadName->{
                roadName,
                firstName,
                lastName,
                image
            }
        }
        `);
  return officers.sort(
    (a, b) =>
      officerOrder.findIndex((position) => position === a.position) -
      officerOrder.findIndex((position) => position === b.position)
  );
};

export const getFallen = async () => {
  return sanityClient.fetch<ChapterMember[]>(`
        *[_type == "fallen"]{
            roadName,
            image
        }
        `);
};

export const getCalendar = async () => {
  const response = await fetch(
    `https://api.band.us/ical?token=${process.env.ICAL_TOKEN}`
  );
  const calendarText = await response.text();
  const calendar = ICAL.parse(calendarText) as IcalParsed;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, metadata, calendarEvents] = calendar;
  const events: IcalShaped[] = [];
  calendarEvents.forEach((e) => {
    if (e[0] === "vevent") {
      const data = e[1].reduce((acc, ev) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [key, _, dataType, value] = ev;
        switch (key) {
          case "dtstart":
            acc["start"] = new Date(value);
            break;
          case "dtend":
            acc["end"] = new Date(value);
            break;
          default:
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            acc[key] = value;
        }
        return acc;
      }, {} as IcalShaped);
      events.push(data);
    }
  });
  return events.sort((a, b) => a.start.getTime() - b.start.getTime());
};
