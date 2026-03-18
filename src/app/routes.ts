import { createBrowserRouter } from "react-router";
import RootLayout from "./components/RootLayout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillsPage from "./pages/SkillsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "projects", Component: ProjectsPage },
      { path: "skills", Component: SkillsPage },
    ],
  },
]);
