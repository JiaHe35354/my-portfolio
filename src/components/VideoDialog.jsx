import { useRef } from "react";

import CrossIcon from "../assets/images/icon-cross.svg";

function VideoDialog({ videoSrc }) {
  const dialogRef = useRef(null);

  function openDialog() {
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleDialogClick(e) {
    if (e.target === dialogRef.current) {
      closeDialog();
    }
  }

  return (
    <>
      <button className="video-btn" type="button" onClick={openDialog}>
        Watch demo
        <svg
          width="14"
          height="14"
          viewBox="0 0 13 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M2 1.5L11 6.5L2 11.5V1.5Z" fill="currentColor" />
        </svg>
      </button>

      <dialog ref={dialogRef} className="dialog" onClick={handleDialogClick}>
        <button
          className="close-btn"
          type="button"
          onClick={closeDialog}
          aria-label="Close"
        >
          <img src={CrossIcon} alt="cross icon" />
        </button>

        <video controls>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </dialog>
    </>
  );
}

export default VideoDialog;
