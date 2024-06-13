import type { FC } from "preact/compat";

interface ProjectCard {
  name: string;
  srcImg: string;
  desc: string;
  status: string;
  tech: string[];
  href: string;
}

const Card: FC<ProjectCard> = ({ name, srcImg, desc, status, tech, href }) => {
  return (
    <div class="flex flex-col">
      <img src={srcImg} alt={name} class="object-cover" />
      <div class="flex flex-col gap-4 p-2 bg-highlight rounded-sm">
        <h3 class="text-center text-lg font-semibold">{name}</h3>
        <p class="card-description">{desc}</p>
        <div class="tech-container flex flex-wrap gap-2 justify-evenly">
          {tech.map(item => (
            <div
              key={item}
              class="flex justify-center items-center gap-2 px-2 py-1 rounded-sm bg-primary"
            >
              <img
                src={`/${item}.png`}
                alt={`${item} logo`}
                width={20}
                height={20}
              />
              <p>{item}</p>
            </div>
          ))}
        </div>
        <div class="flex justify-between">
          <a href={href}>
            <img src="/link.png" alt="link image" width={25} height={25} />
          </a>
          <div class="flex w-fit rounded-sm items-center gap-2 px-2 bg-secondary">
            {status === "finish" ? (
              <div class="projects-finish"></div>
            ) : (
              <div class="projects-pending"></div>
            )}
            <span class="card-status">{status}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
