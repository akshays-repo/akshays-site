import { CSSProperties, FC, useCallback, useState } from "react";
import { useDrop, XYCoord } from "react-dnd";
import { Box, ItemTypes } from "./Box";
import update from "immutability-helper";
import { DragItem } from "./interfaces";
import DeskTopIcons from "./DeskTopIcons";
import { Icons } from "../../constants/icons";

const styles: CSSProperties = {
  width: "100%",
  height: "calc(100vh - 100px)",
  position: "relative",
};

export interface ContainerProps {
  hideSourceOnDrag: boolean;
}

export interface ContainerState {
  boxes: { [key: string]: { top: number; left: number; title: string } };
}

export const Container: FC<ContainerProps> = ({ hideSourceOnDrag }) => {
  const [boxes, setBoxes] = useState<{
    [key: string]: {
      top: number;
      left: number;
      title: any;
    };
  }>({
    a: {
      top: 20,
      left: 0,
      title: <DeskTopIcons title="About me" icon={Icons.about} onClick={() => {}} />,
    },
    b: {
      top: 20,
      left: 100,
      title: <DeskTopIcons title="Blog" icon={Icons.blog} onClick={() => {}} />,
    },
  });

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes, setBoxes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => {
        const { left, top, title } = boxes[key];
        return (
          <Box
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={hideSourceOnDrag}
          >
            {title}
          </Box>
        );
      })}
    </div>
  );
};
