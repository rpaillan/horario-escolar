export const data = {
  days: [
    { name: "monday" },
    { name: "tuesday" },
    { name: "wednesday" },
    { name: "thursday" },
    { name: "friday" },
  ],
  modulos: [
    { label: "1", times: { start: 800, end: 845 } },
    { label: "2", times: { start: 845, end: 930 } },
    { label: "recreo-1", times: { start: 930, end: 945 } },
    { label: "3", times: { start: 945, end: 1030 } },
    { label: "4", times: { start: 1030, end: 1115 } },
    { label: "recreo-2", times: { start: 1115, end: 1130 } },
    { label: "5", times: { start: 1130, end: 1215 } },
    { label: "6", times: { start: 1215, end: 1300 } },
    { label: "recreo-3", times: { start: 1300, end: 1400 } },
    { label: "7", times: { start: 1400, end: 1445 } },
    { label: "8", times: { start: 1445, end: 1530 } },
  ],
  lectures: [
    {
      name: "Lenguaje",
      teacher: "Eloisa",
      color: "#ffbf00",
      classes: [
        { day: "monday", modulos: ["1", "2"] },
        { day: "tuesday", modulos: ["5", "6"] },
        { day: "wednesday", modulos: ["5", "6"] },
        { day: "thursday", modulos: ["7", "8"] },
      ],
    },
    {
      name: "Matematicas",
      teacher: "Nora",
      color: "#ffaa00",
      classes: [
        { day: "tuesday", modulos: ["1", "2"] },
        { day: "wednesday", modulos: ["7", "8"] },
        { day: "thursday", modulos: ["3", "4"] },
      ],
    },
    {
      name: "Musica",
      teacher: "--",
      color: "#fbf15e",
      classes: [{ day: "wednesday", modulos: ["1", "2"] }],
    },
    {
      name: "Historia",
      teacher: "M.Jesus",
      color: "#2c8fff",
      classes: [
        { day: "thursday", modulos: ["1", "2"] },
        { day: "friday", modulos: ["4"] },
      ],
    },
    {
      name: "Cs. Naturales",
      teacher: "M.Jesus",
      color: "#6a68ff",
      classes: [
        { day: "tuesday", modulos: ["3", "4"] },
        { day: "friday", modulos: ["3"] },
      ],
    },
    {
      name: "Ingles",
      teacher: "Paula",
      color: "#607b94",
      classes: [{ day: "friday", modulos: ["1", "2"] }],
    },
    {
      name: "Religion",
      teacher: "Paula",
      color: "#a7c3cb",
      classes: [{ day: "monday", modulos: ["3", "4"] }],
    },
    {
      name: "Ed. Fisica",
      teacher: "Sandra/Andrea",
      color: "#6f9e5a",
      classes: [
        { day: "monday", modulos: ["5", "6"] },
        { day: "thursday", modulos: ["5", "6"] },
      ],
    },
    {
      name: "A. Visuales",
      teacher: "M.Jesus",
      color: "#8a76d1",
      classes: [{ day: "wednesday", modulos: ["3", "4"] }],
    },
    {
      name: "T. Desafios",
      teacher: "Astrid",
      color: "#ed1690",
      classes: [{ day: "monday", modulos: ["7", "8"] }],
    },
    {
      name: "Tecnologia",
      teacher: "Victoria",
      color: "#8e5fa8",
      classes: [{ day: "tuesday", modulos: ["7"] }],
    },
    {
      name: "Orientacion",
      teacher: "Eloisa",
      color: "#22c0df",
      classes: [{ day: "tuesday", modulos: ["8"] }],
    },
    {
      name: "Taller Lectura/Escritura",
      teacher: "Eloisa",
      color: "#00a6fb",
      classes: [{ day: "friday", modulos: ["5", "6"] }],
    },
  ],
};

export const lecturesMap = {};

data.lectures.forEach((lecture) => {
  lecture.classes.forEach((classe) => {
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
        lecturesMap[key] = { lecture, classe, enabled: index === 0 } ;
      }
    });
  });
});