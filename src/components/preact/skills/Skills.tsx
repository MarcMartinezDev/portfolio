import "./skills.css";
import { useState } from "preact/hooks";
import { SKILLS as skills } from "./skills";
import Card from "./Card";

const Skills = () => {
  const [menu, setMenu] = useState("tech");

  const skillsFiltered =
    menu === "tech"
      ? skills.filter(skill => skill.type === menu)
      : menu === "tools"
      ? skills.filter(skill => skill.type === menu)
      : skills.filter(skill => skill.type === menu);

  return (
    <div class="flex flex-col gap-5">
      <menu class="menu flex gap-4">
        <div
          class={menu === "tech" ? "bg-highlight" : ""}
          onClick={() => setMenu("tech")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464zm10.024 2.982a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.588-9.659a.75.75 0 0 1 .92-.53zM14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642.384.504.654 1.036.654 1.68 0 .644-.27 1.176-.654 1.68-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528.283-.37.347-.586.347-.77 0-.184-.064-.4-.347-.77-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06zm-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528-.283.37-.346.586-.346.77 0 .184.063.4.346.77.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642-.384-.504-.653-1.036-.653-1.68 0-.644.27-1.176.653-1.68.364-.477.894-1.007 1.53-1.642l.208-.208z"
              fill={menu === "tech" ? "#f2f2f2" : "#868686"}
            />
          </svg>
          <li class={menu === "tech" ? "text-text" : ""}>Technologies</li>
        </div>
        <div
          class={menu === "tools" ? "bg-highlight" : ""}
          onClick={() => setMenu("tools")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={menu === "tools" ? "#f2f2f2" : "#868686"}
              d="M764.416 254.72a351.68 351.68 0 0 1 86.336 149.184H960v192.064H850.752a351.68 351.68 0 0 1-86.336 149.312l54.72 94.72-166.272 96-54.592-94.72a352.64 352.64 0 0 1-172.48 0L371.136 936l-166.272-96 54.72-94.72a351.68 351.68 0 0 1-86.336-149.312H64v-192h109.248a351.68 351.68 0 0 1 86.336-149.312L204.8 160l166.208-96h.192l54.656 94.592a352.64 352.64 0 0 1 172.48 0L652.8 64h.128L819.2 160l-54.72 94.72zM704 499.968a192 192 0 1 0-384 0 192 192 0 0 0 384 0z"
            />
          </svg>
          <li class={menu === "tools" ? "text-text" : ""}>Tools</li>
        </div>
        <div
          class={menu === "lang" ? "bg-highlight" : ""}
          onClick={() => setMenu("lang")}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke={menu === "lang" ? "#f2f2f2" : "#868686"}
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="m5 14 .91-2.667M11 14l-1.09-2.667m0 0L7.726 6 5.91 11.333m4 0h-4M13 11.846h3.5m3.5 0h-1.75m-1.75 0V10m0 1.846h1.75m0 0c-.194 1.436-1.983 5.17-5.25 6.154m5.833 0c-1.166-.615-4.2-2.83-4.666-4.308" />
            </g>
          </svg>
          <li class={menu === "lang" ? "text-text" : ""}>Languages</li>
        </div>
      </menu>
      <div class="grid grid-cols-3 gap-4 min-h-[250px]">
        {skillsFiltered.map(skill => (
          <div key={skill.name} class=" animate-[enter_.6s]">
            <Card name={skill.name} srcImg={skill.srcImg} width={skill.width} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
