interface TaskBarIconsInterface {
  icon: string;
  onClick: Function;
}

const TaskBarIcons = ({ icon }: TaskBarIconsInterface) => {
  return (
    <div className="hover:ring cursor-pointer">
      <img src={icon} width={"20px"} height={"20px"} />
    </div>
  );
};

export default TaskBarIcons;
