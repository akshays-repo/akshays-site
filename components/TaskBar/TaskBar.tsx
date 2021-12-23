import { Icons } from "../../constants/icons";
import TaskBarIcons from "./TaskBarIcons";

const TaskBar = () => {
  return (
    <div className="backdrop-blur-md bg-white/20  w-screen">
      <div className="flex p-3 space-x-5 place-content-center">
        <div><TaskBarIcons icon={Icons.about}   onClick={()=>{}} /></div>
        <div><TaskBarIcons icon={Icons.blog}   onClick={()=>{}} /></div>
        <div><TaskBarIcons icon={Icons.about}   onClick={()=>{}} /></div>
        <div><TaskBarIcons icon={Icons.about}   onClick={()=>{}} /></div>
        <div><TaskBarIcons icon={Icons.about}   onClick={()=>{}} /></div>

      </div>
    </div>
  );
};
export default TaskBar;
