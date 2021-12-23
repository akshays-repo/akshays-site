import type { NextPage } from "next";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DeskTop } from "../components/DeskTop/DeskTop";
import MenuOptions from "../components/MenuOptions";
import TaskBar from "../components/TaskBar/TaskBar";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 hover:bg-gradient-to-r h-screen">
      <DndProvider backend={HTML5Backend}>
        <div className="container mx-auto">
          <DeskTop />
          <MenuOptions />
        </div>


      </DndProvider>

      <div className="fixed  bottom-0 left-0 ">
        <TaskBar />
      </div>
    </div>
  );
};

export default Home;
