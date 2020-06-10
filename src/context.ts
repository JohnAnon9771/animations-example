import React, { createContext } from "react";

import london from "./assets/london.jpg";
import italy from "./assets/italia.jpg";
import tokyo from "./assets/tokyo.jpg";

const data = [
  { id: 1, label: "London", subLabel: "UK", source: london },
  { id: 2, label: "Tokyo", subLabel: "Japan", source: tokyo },
  { id: 3, label: "Italy", subLabel: "Roma", source: italy },
];

export const DataContext = createContext(data);
