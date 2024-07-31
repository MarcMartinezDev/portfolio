import "./projects.css";
import { PROJECTS as projects } from "./projects";
import { useState } from "preact/hooks";
import Card from "./Card";

const Projects = () => {
  const [menu, setMenu] = useState("all");

  const projectsFiltered =
    menu === "all"
      ? projects
      : projects.filter(project => project.status === menu);

  return (
    <div class="flex flex-col gap-10">
      <h2>Projects</h2>
      <menu class="menu projects-container flex gap-4">
        <div
          class={menu === "all" ? "bg-gradient" : "selection-menu"}
          onClick={() => setMenu("all")}
        >
          <div class="projects-all"></div>
          <li class={menu === "all" ? "text-white" : ""}>All</li>
        </div>
        <div
          class={menu === "pending" ? "bg-gradient" : "selection-menu"}
          onClick={() => setMenu("pending")}
        >
          <div class="projects-pending"></div>
          <li class={menu === "pending" ? "text-white" : ""}>Pending</li>
        </div>
        <div
          class={menu === "finish" ? "bg-gradient" : "selection-menu"}
          onClick={() => setMenu("finish")}
        >
          <div class="projects-finish"></div>
          <li class={menu === "finish" ? "text-white" : ""}>Finish</li>
        </div>
      </menu>
      <div class="grid grid-cols-3 gap-4 min-h-[500px]">
        {projectsFiltered.map(project => (
          <Card
            key={project.name}
            desc={project.desc}
            href={project.href}
            name={project.name}
            srcImg={project.srcImg}
            status={project.status}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
