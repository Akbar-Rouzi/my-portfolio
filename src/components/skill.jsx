import Scroll from "@/components/svgs/scroll";
import skillList from "../utils/skillList";
const Skill = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* SKILLS TITLE */}
      <h1 className="font-bold text-2xl">SKILLS</h1>
      {/* SKILL LIST */}
      <div className="flex gap-4 flex-wrap">
        {skillList.map((skill) => (
          <div
            key={skill.name}
            className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black"
          >
            {skill.name}
          </div>
        ))}
      </div>
      {/* SKILL SCROLL SVG */}
      <Scroll />
    </div>
  );
};

export default Skill;
