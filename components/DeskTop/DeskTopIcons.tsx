import { title } from "process";

interface DeskTopIconsInterFace {
  icon: string;
  onClick: Function;
  title: string;
}

const DeskTopIcons = (props: DeskTopIconsInterFace) => {
  return (
    <div className="text-center">
      <img src={props.icon} width={"50px"} height={"50px"} />
      <div className="text-d text-sm font-semi text-white" >{props.title}</div>
    </div>
  );
};
export default DeskTopIcons;
