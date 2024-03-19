import React from "react";
import { data, lecturesMap } from "./data";
import {
  RiBookFill,
  RiFootballLine,
  RiHeartFill,
  RiTimeLine,
} from "@remixicon/react";

import "./Horario.scss";

function formatTime(value: number): string {
  let time = String(value);
  time =
    time.substring(time.length - 4, time.length - 2) +
    ":" +
    time.substring(time.length - 2, time.length);

  return time;
}

export const HorarioContainer = () => {
  return (
    <div className="horario">
      <div className="cell" />
      {data.days.map((day) => (
        <div className="cell day">{day.label}</div>
      ))}
      {data.modulos.map((sector) => {
        if (sector.isBreak) return;
        return (
          <>
            <div className="cell sector">
              <div className="sector-name">
                {sector.isBreak ? "" : sector.label}
              </div>
              <div className="times">
                <span className="time">
                  {formatTime(sector.times.start)}
                  <RiTimeLine size={15} />{" "}
                </span>
                <span className="time">
                  {" "}
                  {formatTime(sector.times.end)}
                  <RiTimeLine size={15} />
                </span>
              </div>
            </div>
            {data.days.map((day) => {
              const key = day.name + "-" + sector.label;
              if (lecturesMap[key]) {
                const { lecture, classe, enabled } = lecturesMap[key];
                if (!enabled) return null;
                return (
                  <div
                    className="cell lecture"
                    style={{
                      gridRow: "span " + classe.modulos.length,
                    }}
                  >
                    <div className="lecture-name">{lecture.name}</div>
                    <div className="lecture-teacher">
                      
                      <RiBookFill
                        className="book"
                        size={40}
                        color={lecture.color || "white"}
                      />{" "}{lecture.teacher}{" "}
                    </div>
                  </div>
                );
              } else {
                return <div className="cell free"></div>;
              }
            })}
          </>
        );
      })}
    </div>
  );
};
