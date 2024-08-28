import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HorarioContainer } from "./Horario";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HorarioContainer />
  </StrictMode>
);
