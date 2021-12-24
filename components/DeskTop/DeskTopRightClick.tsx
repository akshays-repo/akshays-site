import { ReactNode, useCallback, useEffect, useState } from "react";
import styles from "./DeskTopRightClick.module.scss";

type Props = {
  childern: ReactNode;
};

function DeskTopRightClick({ childern }: Props) {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false); // hide menu

  const handleContextMenu = useCallback(
    (event) => {
      event.preventDefault();
      setAnchorPoint({ x: event.pageX, y: event.pageY });
      setShow(true);
    },
    [setAnchorPoint]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  });

  return (
    <div className="">
      {show ? (
        <ul
          className="absolute w-52 bg-white shadow-md shadow-slate-800 p-3 tracking-tighter cursor-pointer"
          style={{
            top: anchorPoint.y,
            left: anchorPoint.x,
          }}
        >
          <li className="">Refresh</li>
          <li>Exit</li>
        </ul>
      ) : (
        <> </>
      )}

      {childern}
    </div>
  );
}
export default DeskTopRightClick;
