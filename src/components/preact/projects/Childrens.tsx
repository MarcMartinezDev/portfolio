import Card from "./Card";

export const AllProjects = () => {
  return (
    <div class="grid grid-cols-2">
      <Card
        name="FuAPI"
        desc="FuAPI is a simple REST API that provides you with fake user data for your projects or tests."
        srcImg="/linkedin.png"
        status="finish"
        tech={["react", "tailwind", "node", "express","mongodb"]}
        href=""
      />
    </div>
  );
};
