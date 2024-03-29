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
      {data.days.map((day) => (
        <div className="cell day">{day.label}</div>
      ))}
      {data.modulos.map((sector) => {
        if (sector.isBreak) return;
        return (
          <>
            {data.days.map((day) => {
              const key = day.name + "-" + sector.label;
              if (lecturesMap[key]) {
                const { lecture, classe, sectors, enabled } = lecturesMap[key];
                if (!enabled) return null;
                console.log({ lecture, classe, sectors });

                const modulos = classe.modulos.join(" - ");
                const startTime = formatTime(sectors[0].times.start);
                const endTime = formatTime(
                  sectors[sectors.length - 1].times.end
                );
                return (
                  <div
                    className="cell lecture"
                    style={{
                      gridRow: "span " + classe.modulos.length,
                    }}
                  >
                    <div
                      className="sidebar"
                      style={{
                        backgroundColor: lecture.color || "white",
                      }}
                    ></div>
                    <div className="body">
                      <div className="lecture-name">{lecture.name}</div>
                      <div className="lecture-teacher">
                        {lecture.teacher}{" "}
                        <span className="time">{startTime}</span>{" "}
                        <span className="time">{endTime}</span>
                      </div>
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
