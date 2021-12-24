import { useEffect } from "react";
import { useApp } from "../../contextApi/AppContext";

const MenuOptions = () => {
  const { showMenu } = useApp();

  useEffect(() => {
    console.log({ showMenu });
  }, [showMenu]);

  return (
    <>
      {" "}
      {showMenu ? (
        <div className=" absolute top-1/3 left-1/4 w-1/2 h-1/2 bg-white shadow-xl shadow-purple-500/40">
          <div className="transition translate-y-1 scale-110 duration-1000 ease-in  "></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default MenuOptions;
