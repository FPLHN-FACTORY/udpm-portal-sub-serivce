import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import "./index.css";
// import {createBrowserRouter} from "react-router-dom";
//
// const router = createBrowserRouter([
//     {
//         path: "/vite-react-router/",
//         element: <App />,
//         children: [
//             {
//                 path: "/vite-react-router/",
//                 element: <Home />,
//             },
//             {
//                 path: "/vite-react-router/contact",
//                 element: <Contact />,
//             },
//         ],
//     },
// ]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
        <App/>
    </ThemeProvider>
  </React.StrictMode>
);
