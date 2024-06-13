import "../../../styles/projects.css";
import { useState } from "preact/hooks";
import { AllProjects } from "./Childrens";

const Projects = () => {
  const [menu, setMenu] = useState("all");

  return (
    <div>
      <menu class="projects-container flex gap-4">
        <div
          class={menu === "all" ? "selected" : ""}
          onClick={() => setMenu("all")}
        >
          <div class="projects-all"></div>
          <li class={menu === "all" ? "selected" : ""}>All</li>
        </div>
        <div
          class={menu === "pending" ? "selected" : ""}
          onClick={() => setMenu("pending")}
        >
          <div class="projects-pending"></div>
          <li class={menu === "pending" ? "selected" : ""}>Pending</li>
        </div>
        <div
          class={menu === "finish" ? "selected" : ""}
          onClick={() => setMenu("finish")}
        >
          <div class="projects-finish"></div>
          <li class={menu === "finish" ? "selected" : ""}>Finish</li>
        </div>
      </menu>
      <div>
        <AllProjects />
      </div>
    </div>
  );
};

export default Projects;
