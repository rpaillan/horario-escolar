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
      color: "#244aca",
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
      color: "#2e2d6e",
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
          console.error(
            "conflict betwen",
            lecturesMap[key].name,
            "and",
            lecture.name
          );
        } else {
          lecturesMap[key] = lecture;
        }
      });
    });
  });

  const $ = (name, childs) => {
    const el = document.createElement(name);
    if (childs) {
      childs.forEach((c) => el.appendChild(c));
    }
    return el;
  };
  const $t = (text) => {
    return document.createTextNode(text);
  };

  const createCell = (sector, day) => {
    const key = day.name + "-" + sector.label;
    const cell = document.createElement("div");
    cell.className = "cell";

    if (lecturesMap[key]) {
      const lecture = lecturesMap[key];
      cell.style.backgroundColor = lecture.color || "white";
      cell.appendChild(
        document.createTextNode(lecture.name + " (" + lecture.teacher + ")")
      );
    } else {
      cell.classList.add("free");
      cell.appendChild(document.createTextNode(key));
    }
    return cell;
  };

  const cell = document.createElement("div");
  cell.className = "cell sector";
  app.appendChild(cell);

  days.forEach((day) => {
    const cell = document.createElement("div");
    cell.className = "cell sector";
    cell.appendChild(document.createTextNode(day.name));
    app.appendChild(cell);
  });

  modulos.forEach((sector) => {
    const cell = document.createElement("div");
    cell.className = "cell sector";
    cell.appendChild(
      $("div", [
        $t(sector.label),
        $("div", [$t(sector.times.start)]),
        $("div", [$t(sector.times.end)]),
      ])
    );
    app.appendChild(cell);

    days.forEach((day) => {
      app.appendChild(createCell(sector, day));
    });
  });
}
