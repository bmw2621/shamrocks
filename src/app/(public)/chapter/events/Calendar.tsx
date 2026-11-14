"use client";
import { IcalShaped } from "@/lib/typedefs/bandCal";
import { DatesSetArg } from "@fullcalendar/core/index.js";
import { EventImpl } from "@fullcalendar/core/internal.js";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import listPlugin from "@fullcalendar/list"; // a plugin!
import FullCalendar from "@fullcalendar/react";
import { FC, useMemo, useRef, useState } from "react";
import { FcPrevious, FcNext } from "react-icons/fc";
import { MdToday } from "react-icons/md";

type Props = {
  calendar: IcalShaped[];
};

const Calendar: FC<Props> = ({ calendar }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventImpl>();
  const [title, setTitle] = useState<string>();
  const calendarRef = useRef<FullCalendar>(null);

  const calendarApi = () => calendarRef.current?.getApi();

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
        <div className="flex justify-between items-center mb-3">
          <h2>{title}</h2>
          <div className="flex items-center gap-3">
            <button
              className="btn btn-sm btn-primary"
              onClick={() => calendarApi()?.today()}
            >
              <MdToday />
            </button>
            <div className="[&_polygon]:fill-white!">
              <button
                className="btn btn-sm btn-primary"
                onClick={() => calendarApi()?.prev()}
              >
                <FcPrevious />
              </button>
              <button
                className="btn btn-sm btn-primary "
                onClick={() => calendarApi()?.next()}
              >
                <FcNext />
              </button>
            </div>
          </div>
        </div>
        <FullCalendar
          ref={calendarRef}
          headerToolbar={false}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          datesSet={(dateInfo: DatesSetArg) => {
            setTitle(dateInfo.view.title);
          }}
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
