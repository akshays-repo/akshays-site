interface TaskBarIconsInterface {
  icon: string;
  onClick: Function;
}

const TaskBarIcons = ({ icon }: TaskBarIconsInterface) => {
  return (
    <div className=" cursor-pointer p-3">
      <img src={icon} width={"30px"} height={"30px"} />
    </div>
  );
};

export default TaskBarIcons;
