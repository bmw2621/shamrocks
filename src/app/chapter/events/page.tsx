import { getCalendar } from "@/services/backend";

import { FC } from "react";
import Calendar from "./Calendar";

const EventsPage: FC = async () => {
  const calendar = await getCalendar();

  return (
    <main className="w-full max-w-4xl mx-auto flex flex-col pt-5">
      <Calendar calendar={calendar} />
    </main>
  );
};

export default EventsPage;
