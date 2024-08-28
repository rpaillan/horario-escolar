import { CSSProperties, useEffect } from "react";
import { data, lecturesMap } from "./data";

import "./Horario.scss";
import axios from "axios";

function formatTime(value: number): string {
  let time = String(value);
  time =
    time.substring(time.length - 4, time.length - 2) +
    ":" +
    time.substring(time.length - 2, time.length);

  return time;
}

interface MyCustomCSS extends CSSProperties {
  "--sidebar-color": string;
}

export const HorarioContainer = () => {
  useEffect(() => {
    axios
      .get(
        "https://cataas.com/cat?type=square&position=center&width=300&height=300",
        {
          headers: {
            Accept: "image/*",
          },
        }
      )
      .then((data) => console.log(data.data));
  }, []);

  return (
    <>
      <img src="https://cataas.com/cat?type=square&position=center&width=300&height=300" />
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
                  const { lecture, classe, sectors, enabled } =
                    lecturesMap[key];
                  if (!enabled) return null;
                  console.log({ lecture, classe, sectors });

                  const startTime = formatTime(sectors[0].times.start);
                  const endTime = formatTime(
                    sectors[sectors.length - 1].times.end
                  );
                  return (
                    <div
                      className={"cell lecture span-" + classe.modulos.length}
                      style={
                        {
                          gridRow: "span " + classe.modulos.length,
                          "--sidebar-color": lecture.color || "white",
                        } as MyCustomCSS
                      }
                    >
                      <div className="sidebar"></div>
                      <div className="body">
                        <div className="lecture-name">{lecture.name}</div>
                        <div className="lecture-teacher">
                          ({lecture.teacher})
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
    </>
  );
};
