import { useEffect } from "react";

export default function OutSideClick(ref, setOpen) {
  useEffect(() => {
    function handleClickSide(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickSide);
    return () => {
      document.removeEventListener("mousedown", handleClickSide);
    };
  }, [ref]);
}
