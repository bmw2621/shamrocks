export type IcalVEvent = [string, unknown, string, string];

export type IcalEvent = ["vevent" | string, IcalVEvent[]];

export type IcalParsed = [string, unknown, IcalEvent[]];

export type IcalShaped = {
  summary: string;
  description: string;
  location: string;
  geo: [number, number];
  start: Date;
  end: Date;
};
