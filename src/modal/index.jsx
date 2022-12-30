import React from "react";
import ReactDOM from "react-dom";
function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="fixed flex justify-center items-center top-0 left-0 right-0 bottom-0">
      {children}
    </div>,
    document.querySelector("#modal")
  );
}
export { Modal };
