import React, { useState } from "react";
import "./BookingsCalendar.css";

export default function BookingsCalendar() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    // Generate weekdays (Mon–Fri) for next 2 weeks
    const getWeekdays = () => {
        const today = new Date();
        const dates = [];
        for (let i = 0; i < 14; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);

            const dayOfWeek = d.getDay(); // 0=Sun, 1=Mon...
            if (dayOfWeek >= 1 && dayOfWeek <= 5) {
                dates.push({
                    day: d.toLocaleDateString("el-GR", { weekday: "short" }),
                    date: d.getDate(),
                    fullDate: d,
                });
            }
        }
        return dates;
    };

    // Generate times (09:00 - 17:00, every 30 min)
    const getTimes = () => {
        const times = [];
        const start = 9 * 60; // 9:00 in minutes
        const end = 17 * 60; // 17:00 in minutes

        for (let mins = start; mins <= end; mins += 30) {
            const h = Math.floor(mins / 60);
            const m = mins % 60;
            const time = new Date();
            time.setHours(h, m, 0);

            times.push(
                time.toLocaleTimeString("el-GR", {
                    hour: "2-digit",
                    minute: "2-digit",
                })
            );
        }
        return times;
    };

    const dates = getWeekdays();
    const times = getTimes();

    return (
        <div className="calendar-container">
            <h2 className="calendar-title">???????? ???</h2>

            {/* Dates Row */}
            <div className="dates-row">
                {dates.map((d, i) => (
                    <button
                        key={i}
                        className={`date-pill ${selectedDate === i ? "active" : ""
                            }`}
                        onClick={() => {
                            setSelectedDate(i);
                            setSelectedTime(null);
                        }}
                    >
                        <span className="date-number">{d.date}</span>
                        <span className="date-day">{d.day}</span>
                    </button>
                ))}
            </div>

            {/* Time Slots */}
            {selectedDate !== null && (
                <div className="times-list">
                    {times.map((t, i) => (
                        <button
                            key={i}
                            className={`time-slot ${selectedTime === i ? "active" : ""
                                }`}
                            onClick={() => setSelectedTime(i)}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
