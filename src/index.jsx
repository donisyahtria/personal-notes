import React from "react";
import { createRoot } from "react-dom/client";
import PersonalNote from "./components/PersonalNote";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<PersonalNote />);
