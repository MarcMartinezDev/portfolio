export interface ProjectCard {
  name: string;
  srcImg: string;
  desc: string;
  status: string;
  tech: string[];
  href: string;
}

export interface SkillCard {
  name: string;
  type: string;
  srcImg?: string;
  width?: number;
}

export interface Services {
  desc: string;
  dark?: boolean;
}
