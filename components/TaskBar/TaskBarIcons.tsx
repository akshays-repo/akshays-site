interface TaskBarIconsInterface {
  icon: string;
  onClick: Function;
}

const TaskBarIcons = ({ icon, onClick }: TaskBarIconsInterface) => {
  return (
    <div
      className="hover:ring bg-stone-300 rounded-md  hover:backdrop-blur-md hover:bg-white/5 cursor-pointer p-3"
      onClick={() => onClick()}
    >
      <img src={icon} width={"30px"} height={"30px"} />
    </div>
  );
};

export default TaskBarIcons;
