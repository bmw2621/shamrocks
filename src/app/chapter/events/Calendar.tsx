"use client";
import { IcalShaped } from "@/app/typedefs/bandCal";
import { EventImpl } from "@fullcalendar/core/internal.js";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import listPlugin from "@fullcalendar/list"; // a plugin!
import FullCalendar from "@fullcalendar/react";
import { FC, useMemo, useRef, useState } from "react";

type Props = {
  calendar: IcalShaped[];
};

const Calendar: FC<Props> = ({ calendar }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventImpl>();

  const selectedEventTime = useMemo(() => {
    if (!selectedEvent?.start) return null;
    let result = selectedEvent.start.toLocaleTimeString("en-US", {
      hourCycle: "h12",
      hour: "numeric",
      minute: "2-digit",
    });
    if (selectedEvent.end) {
      result += ` - ${selectedEvent.end.toLocaleTimeString("en-US", {
        hourCycle: "h12",
        hour: "numeric",
        minute: "2-digit",
      })}`;
    }
    return result;
  }, [selectedEvent]);

  return (
    <>
      <div className="hidden sm:block">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={calendar.map((ev) => ({
            title: ev.summary,
            date: ev.start,
            color: "#00a43b",
            ...ev,
          }))}
          eventClick={({ event }) => {
            setSelectedEvent(event);
            modalRef.current?.showModal();
          }}
        />
      </div>
      <div className="sm:hidden">
        <FullCalendar
          plugins={[listPlugin]}
          initialView="listWeek"
          events={calendar.map((ev) => ({
            title: ev.summary,
            date: ev.start,
            color: "#00a43b",
            ...ev,
          }))}
          eventClick={({ event }) => {
            setSelectedEvent(event);
            modalRef.current?.showModal();
          }}
        />
      </div>
      <dialog className="modal" ref={modalRef}>
        <div className="modal-box bg-base-200">
          <h3 className="font-bold text-lg">{selectedEvent?.title}</h3>
          <h4 className="italic font-bold text-sm">
            {selectedEvent &&
              selectedEvent.start?.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            {selectedEventTime && ", "}
            {selectedEventTime}
          </h4>
          <p className="py-4">{selectedEvent?.extendedProps["description"]}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-base-100">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Calendar;
