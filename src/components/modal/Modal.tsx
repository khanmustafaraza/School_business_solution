"use client";

import useModal from "@/store/togglemodal/ToggleModal";

const Modal = ({ children, title }: any) => {
  const { setOpen, open, openModal, closeModal } = useModal();

  // ✅ STATE

  return (
    <div className="p-10">
      {open && (
        <div className=" flex items-center justify-center ">
          {/* MODAL BOX */}

          <div className="absolute top-0 z-50 w-[90%] max-w-2xl rounded bg-white shadow-sm overflow-hidden">
            {/* HEADER */}

            <div className="primary-bg px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{title}</h2>

              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 rounded bg-white/10 hover:bg-white/20 text-white transition"
              >
                ✕
              </button>
            </div>

            {/* BODY */}

            <div className="p-2 max-h-[500px] overflow-y-auto">{children}</div>

            {/* FOOTER */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
