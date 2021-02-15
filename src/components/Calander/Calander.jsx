import React, { useState, useEffect } from "react";
import "./Calander.scss";
import moment from "moment";
import buildCalander from "./buildCalander.js";
export default function Calander({ date, select }) {
  const [calander, setCalander] = useState([]);
  const [value, setValue] = useState(moment(date));

  useEffect(() => {
    setCalander(buildCalander(value));
  }, [value]);
 
  function isSelected(day) {
    return value.isSame(day, "day", select);
  }

  function isToday(day) {
    return day.isSame(new Date(), "day");
  }

  function dayStyles(day) {
    if (isSelected(day)) return "selected";
    if (isToday(day)) return "today";
    return "";
  }
  function currMonthName() {
    return value.format("MMMM");
  }
  function currYear() {
    return value.format("YYYY");
  }
  function prevMonth() {
    return value.clone().subtract(1, "month");
  }

  function nextMonth() {
    return value.clone().add(1, "month");
  }
  return (
    <div className='calander'>
      <div className='calander__header'>
        <div onClick={() => setValue(prevMonth())}>
          {String.fromCharCode(171)}
        </div>
        <div>
          {currMonthName()} {currYear()}
        </div>
        <div onClick={() => setValue(nextMonth())}>
          {String.fromCharCode(187)}
        </div>
      </div>
      <div className='day__names'>
        {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
          <div className='week' key={Math.random()}>
            {d}
          </div>
        ))}
      </div>
      {calander.map((week) => (
        <div key={Math.random()}>
          {week.map((day) => (
            <div
              key={Math.random()}
              className='day'
              onClick={() => setValue(day, select(day.format("YYYY-MM-DD")))}
            >
              <div className={dayStyles(day)}>{day.format("D")}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
