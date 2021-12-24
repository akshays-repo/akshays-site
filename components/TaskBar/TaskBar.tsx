import { Icons } from "../../constants/icons";
import { useApp } from "../../contextApi/AppContext";
import TaskBarIcons from "./TaskBarIcons";

const TaskBar = () => {
  const { showMenu, closeMenu, openMenu } = useApp();

  const handleMenuClick = () => {
    if (showMenu) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  return (
    <>
      <div className="backdrop-blur-md bg-white/20  w-screen">
        <div className="flex p-3 space-x-5 place-content-center">
          <div>
            <TaskBarIcons
              icon={Icons.windows}
              onClick={() => {
                handleMenuClick();
              }}
            />
          </div>
          <div>
            <TaskBarIcons icon={Icons.linkedin} onClick={() => {}} />
          </div>
          <div>
            <TaskBarIcons icon={Icons.github} onClick={() => {}} />
          </div>
          <div>
            <TaskBarIcons icon={Icons.instagram} onClick={() => {}} />
          </div>
          <div>
            <TaskBarIcons icon={Icons.settings} onClick={() => {}} />
          </div>
        </div>

        <div></div>
      </div>
    </>
  );
};
export default TaskBar;
