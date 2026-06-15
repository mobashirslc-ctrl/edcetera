import { createRoot } from "react-dom/client";
import app from "./app.tsx"; // পাথ ঠিক করা হয়েছে
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<app />);