import Sign from "@/components/svgs/sign";
import Scroll from "@/components/svgs/scroll";
const Biography = () => {
  return (
    <div className="flex flex-col gap-12 justify-center">
      {/* BIOGRAPHY TITLE */}
      <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
      {/* BIOGRAPHY DESC */}
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum
        quibusdam cupiditate nobis accusamus sed aut aperiam, reiciendis
        numquam! Voluptas voluptatibus obcaecati dolore itaque suscipit! Vel
        doloremque numquam quam nihil.
      </p>
      {/* BIOGRAPHY QUOTE */}
      <span className="italic">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </span>
      {/* BIOGRAPHY SIGN SVG*/}
      <Sign />
      {/* BIOGRAPHY SCROLL SVG */}
      <Scroll />
    </div>
  );
};

export default Biography;
