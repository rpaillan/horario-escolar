declare const NODE_ENV: string;
if (NODE_ENV === 'development')
  new EventSource('/esbuild').addEventListener('change', () => location.reload());

import { createRoot } from "react-dom/client";
import { HorarioContainer } from "./Horario";
import React from "react";

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(<HorarioContainer />);
}
