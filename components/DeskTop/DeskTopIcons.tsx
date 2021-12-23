import { title } from "process";

interface DeskTopIconsInterFace {
  icon: string;
  onClick: Function;
  title: string;
}

const DeskTopIcons = (props: DeskTopIconsInterFace) => {
  return (
    <div className="flex flex-col content-center items-center text-center p-2 hover:backdrop-blur-md hover:bg-white/20 w-24">
      <img src={props.icon} width={"40px"} height={"40px"} />
      <div className="text-sm font-semi text-white">{props.title}</div>
    </div>
  );
};
export default DeskTopIcons;
