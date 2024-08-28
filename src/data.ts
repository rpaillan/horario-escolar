export const data = {
  days: [
    { name: "monday", label: "Lunes" },
    { name: "tuesday", label: "Mastes" },
    { name: "wednesday", label: "Miercoles" },
    { name: "thursday", label: "Jueves" },
    { name: "friday", label: "Viernes" },
  ],
  modulos: [
    { label: "1", times: { start: 800, end: 845 } },
    { label: "2", times: { start: 845, end: 930 } },
    { label: "r-1", times: { start: 930, end: 945 }, isBreak: true },
    { label: "3", times: { start: 945, end: 1030 } },
    { label: "4", times: { start: 1030, end: 1115 } },
    { label: "r-2", times: { start: 1115, end: 1130 }, isBreak: true },
    { label: "5", times: { start: 1130, end: 1215 } },
    { label: "6", times: { start: 1215, end: 1300 } },
    { label: "r-3", times: { start: 1300, end: 1400 }, isBreak: true },
    { label: "7", times: { start: 1400, end: 1445 } },
    { label: "8", times: { start: 1445, end: 1530 } },
  ],
  lectures: [
    {
      name: "Lenguaje",
      teacher: "Eloisa",
      color: "#c63637",
      classes: [
        { day: "monday", modulos: ["1", "2"] },
        { day: "tuesday", modulos: ["5", "6"] },
        { day: "wednesday", modulos: ["5", "6"] },
        { day: "thursday", modulos: ["7", "8"] },
      ],
    },
    {
      name: "Matemática",
      teacher: "Nora",
      color: "#5086c1",
      classes: [
        { day: "tuesday", modulos: ["1", "2"] },
        { day: "wednesday", modulos: ["7", "8"] },
        { day: "thursday", modulos: ["3", "4"] },
      ],
    },
    {
      name: "Música",
      teacher: "",
      color: "lightblue",
      classes: [{ day: "wednesday", modulos: ["1", "2"] }],
    },
    {
      name: "Historia",
      teacher: "M. Jesus",
      color: "orange",
      classes: [
        { day: "thursday", modulos: ["1", "2"] },
        { day: "friday", modulos: ["4"] },
      ],
    },
    {
      name: "C. Naturales",
      teacher: "M. Jesus",
      color: "#42ab49",
      classes: [
        { day: "tuesday", modulos: ["3", "4"] },
        { day: "friday", modulos: ["3"] },
      ],
    },
    {
      name: "Inglés",
      teacher: "Paula",
      color: "#ddd",
      classes: [{ day: "friday", modulos: ["1", "2"] }],
    },
    {
      name: "Religion",
      teacher: "Paula",
      color: "#572364",
      classes: [{ day: "monday", modulos: ["3", "4"] }],
    },
    {
      name: "Ed. Física",
      teacher: "Sandra / Andrea",
      color: "yellow",
      classes: [
        { day: "monday", modulos: ["5", "6"] },
        { day: "thursday", modulos: ["5", "6"] },
      ],
    },
    {
      name: "Artes",
      teacher: "M. Jesus",
      color: "#964B00",
      classes: [{ day: "wednesday", modulos: ["3", "4"] }],
    },
    {
      name: "Taller Matemática",
      teacher: "Astrid",
      color: "#5086c1",
      classes: [{ day: "monday", modulos: ["7", "8"] }],
    },
    {
      name: "Tecnología",
      teacher: "Victoria",
      color: "#fff",
      classes: [{ day: "tuesday", modulos: ["7"] }],
    },
    {
      name: "Orientación",
      teacher: "Eloisa",
      color: "pink",
      classes: [{ day: "tuesday", modulos: ["8"] }],
    },
    {
      name: "Taller Lenguaje",
      teacher: "Eloisa",
      color: "#c63637",
      classes: [{ day: "friday", modulos: ["5", "6"] }],
    },
  ],
};

export const lecturesMap: { [key: string]: any } = {};

data.lectures.forEach((lecture) => {
  lecture.classes.forEach((classe) => {
    const sectors = classe.modulos.map((m) => {
      return data.modulos.find((modu) => modu.label === m);
    });
    classe.modulos.forEach((modulo, index) => {
      const key = classe.day + "-" + modulo;
      if (key in lecturesMap) {
        console.error(
          "conflict betwen",
          lecturesMap[key].name,
          "and",
          lecture.name
        );
      } else {
        lecturesMap[key] = { lecture, classe, sectors, enabled: index === 0 };
      }
    });
  });
});
