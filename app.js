const app = document.querySelector(".horario");
if (app) {
  const modulos = [
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
  ];
  const lectures = [
    {
      name: "Lenguaje",
      teacher: "Eloisa",
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
      classes: [
        { day: "tuesday", modulos: ["1", "2"] },
        { day: "wednesday", modulos: ["7", "8"] },
        { day: "thursday", modulos: ["3", "4"] },
      ],
    },
    {
      name: "Musica",
      teacher: "--",
      classes: [
        { day: "wednesday", modulos: ["1", "2"] },
      ],
    },
    {
      name: "Historia",
      teacher: "M.Jesus",
      classes: [
        { day: "thursday", modulos: ["1", "2"] },
        { day: "friday", modulos: ["4"] },
      ],
    },
    {
      name: "Cs. Naturales",
      teacher: "M.Jesus",
      classes: [
        { day: "tuesday", modulos: ["3", "4"] },
        { day: "friday", modulos: ["3"] },
      ],
    },
    {
      name: "Ingles",
      teacher: "Paula",
      classes: [
        { day: "friday", modulos: ["1", "2"] },
      ],
    },
    {
      name: "Religion",
      teacher: "Paula",
      classes: [
        { day: "monday", modulos: ["3", "4"] },
      ],
    },
    {
      name: "Ed. Fisica",
      teacher: "Sandra/Andrea",
      classes: [
        { day: "monday", modulos: ["5", "6"] },
        { day: "thursday", modulos: ["5", "6"] },
      ],
    },
    {
      name: "A. Visuales",
      teacher: "M.Jesus",
      classes: [
        { day: "wednesday", modulos: ["3", "4"] },
      ],
    }
    ,
    {
      name: "T. Desafios",
      teacher: "Astrid",
      classes: [
        { day: "monday", modulos: ["7", "8"] },
      ],
    },
    {
      name: "Tecnologia",
      teacher: "Victoria",
      classes: [
        { day: "tuesday", modulos: ["7"] },
      ],
    },
    {
      name: "Orientacion",
      teacher: "Eloisa",
      classes: [
        { day: "tuesday", modulos: ["8"] },
      ],
    },
    {
      name: "Taller Lectura/Escritura",
      teacher: "Eloisa",
      classes: [
        { day: "friday", modulos: ["5", "6"] },
      ],
    },
  ];

  const days = [
    { name: "monday" },
    { name: "tuesday" },
    { name: "wednesday" },
    { name: "thursday" },
    { name: "friday" },
  ];

  const lecturesMap = {};
  lectures.forEach((lecture) => {
    lecture.classes.forEach((classe) => {
      classe.modulos.forEach((modulo) => {
        const key = classe.day + "-" + modulo;
        if (key in lecturesMap) {
          console.error("conflict betwen", lecturesMap[key].name, "and", lecture.name);
        } else {
          lecturesMap[key] = lecture;
        }
      });
    });
  });
  console.log(lecturesMap);

  const createCell = (sector, day) => {
    const key = day.name + "-" + sector.label
    const cell = document.createElement("div");
    cell.className = "cell";

    if (lecturesMap[key]) {
      const lecture = lecturesMap[key];
      cell.appendChild(document.createTextNode(lecture.name + " (" + lecture.teacher + ")"));
    } else {
      cell.classList.add("free")
      cell.appendChild(document.createTextNode(key));
    }
    return cell;
  };

  modulos.forEach((sector) => {
    days.forEach((day) => {
      app.appendChild(createCell(sector, day));
    });
  });
}
