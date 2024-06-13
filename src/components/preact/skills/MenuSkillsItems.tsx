import Card from "../skills/Card";

export const TechMenuSkills = () => {
  return (
    <div class="grid grid-cols-3 gap-4">
      <Card name="HTML5" srcImg="/html.png" />
      <Card name="CSS3" srcImg="/css.png" />
      <Card name="Tailwind CSS" srcImg="/tailwind.png" />
      <Card name="JavaScript" srcImg="/javascript.png" />
      <Card name="TypeScript" srcImg="/typescript.png" />
      <Card name="React" srcImg="/react.png" />
      <Card name="Astro" srcImg="/astro.png" />
      <Card name="Node JS" srcImg="/node.png" />
      <Card name="Express JS" srcImg="/express.png" />
      <Card name="SQL" srcImg="/sql.png" />
      <Card name="MySQL" srcImg="/mysql.png" />
      <Card name="MongoDB" srcImg="/mongodb.png" />
    </div>
  );
};

export const ToolsMenuSkills = () => {
  return (
    <div class="grid grid-cols-3 gap-4">
      <Card name="Github" srcImg="/github.png" />
      <Card name="NPM" srcImg="/npm.png" />
      <Card name="Figma" srcImg="/figma.png" />
    </div>
  );
};

export const LanguagesMenuSkills = () => {
  return (
    <div class="grid grid-cols-3 gap-4">
      <Card name="Spanish" />
      <Card name="English" />
    </div>
  );
};
