import React from "react";
import { data, lecturesMap } from "./data";

import "./Horario.css";

export const HorarioContainer = () => {
  return (
    <div className="horario">
      <div className="cell sector" />
      {data.days.map((day) => (
        <div className="cell day">{day.name}</div>
      ))}
      {data.modulos.map((sector) => {
        return (
          <>
            <div className="cell sector">
              {sector.label}
              <span>{sector.times.start}</span>
              <span>{sector.times.end}</span>
            </div>
            {data.days.map((day) => {
              const key = day.name + "-" + sector.label;
              if (lecturesMap[key]) {
                const {lecture, classe , enabled} = lecturesMap[key];
                if (!enabled) return null;
                return (
                  <div
                    className="cell lecture"
                    style={{ backgroundColor: lecture.color || "white", gridRow: "span " + classe.modulos.length }}
                  >
                    <div className="lecture-name">{lecture.name}</div>
                    <div className="lecture-teacher">{lecture.teacher}</div>
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
