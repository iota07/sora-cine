import React from "react";
function ModalVideo({ onClose, youtube }) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-gray-900 rounded-2xl p-2 z-20 text-white font-bold">
      <button onClick={onClose}>Close</button>
      <iframe
        className="w-screen h-[275px] min-h-fit sm:w-screen sm:h-[360px] md:w-[755px] md:h-[424px] lg:w-[1000px] lg:h-[562px] 2xl:w-[1000px] 2xl:h-[675px]"
        src={youtube}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="modal-video"
      ></iframe>
    </div>
  );
}

export default ModalVideo;
