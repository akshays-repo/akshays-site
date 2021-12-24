import { FC, useState, useCallback, useEffect } from "react";
import { Container } from "./Container";
import DeskTopRightClick from "./DeskTopRightClick";

export const DeskTop: FC = () => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint, setShow]
  );

  useEffect(() => {
    document.removeEventListener("contextmenu", handleContextMenu);

    return () => {
      document.addEventListener("contextmenu", handleContextMenu);
    };
  });

  return (
    <div>
      <DeskTopRightClick childern={<Container hideSourceOnDrag={false} />} />
    </div>
  );
};
