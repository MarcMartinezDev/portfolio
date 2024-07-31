import { type ProjectCard } from "../../../types.d";
import type { FC } from "preact/compat";

const Card: FC<ProjectCard> = ({ name, srcImg, desc, status, tech, href }) => {
  return (
    <div class="project-card flex flex-col animate-[enter_.6s] hover:scale-105 transition-all">
      <div class="min-h-[200px]">
        <img
          src={srcImg}
          alt={name}
          class="object-cover w-full h-full rounded-t-sm"
        />
      </div>
      <div class="project-info flex flex-col justify-between h-full gap-2 p-2 bg-highlight rounded-sm">
        <h3 class="text-center text-lg font-semibold">{name}</h3>
        <p>{desc}</p>
        <div class="grid grid-cols-2 gap-2 justify-evenly">
          {tech.map(item => (
            <div
              key={item}
              class="flex justify-center items-center gap-2 px-1 py-1 rounded-sm bg-primary"
            >
              <img
                src={`/icons/${item}.png`}
                alt={`${item} logo`}
                width={20}
                height={20}
              />
              <p class="text-sm">{item}</p>
            </div>
          ))}
        </div>
        <div class="flex justify-between">
          <a href={href}>
            <img
              src="/icons/link.png"
              alt="link image"
              width={25}
              height={25}
            />
          </a>
          <div class="status-card flex w-fit rounded-sm items-center gap-2 px-2 bg-secondary">
            {status === "finish" ? (
              <div class="projects-finish"></div>
            ) : (
              <div class="projects-pending"></div>
            )}
            <span>{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
