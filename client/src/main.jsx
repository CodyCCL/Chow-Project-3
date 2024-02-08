import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = createRoot(document.getElementById("root"));

root.render(<App />);
