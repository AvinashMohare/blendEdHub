import React, { useState } from "react";
import "../styles/Calendar.scss";

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handleDateClick = (day) => {
        setSelectedDate(day);
        // You can perform additional actions when a date is clicked
    };

    const renderCalendar = () => {
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth();

        const daysInMonth = getDaysInMonth(currentYear, currentMonth);
        const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);

        const calendarArray = [];

        // Fill the array with empty slots for days before the first day of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            calendarArray.push(null);
        }

        // Fill the array with days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            calendarArray.push(day);
        }

        return (
            <div className="calendar">
                <div className="weekdays">
                    {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                        (day) => (
                            <div key={day} className="weekday">
                                {day}
                            </div>
                        )
                    )}
                </div>
                <div className="days">
                    {calendarArray.map((day, index) => (
                        <div
                            key={index}
                            className={`${
                                day === null ||
                                index === 22 ||
                                index === 12 ||
                                index === 14
                                    ? "empty"
                                    : ""
                            } ${
                                day === selectedDate
                                    ? "selected"
                                    : "not-selected"
                            }`}
                            onClick={() => handleDateClick(day)}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div>
            <h2>Calendar</h2>
            {renderCalendar()}
        </div>
    );
};

export default Calendar;
