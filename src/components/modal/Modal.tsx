"use client";

import useModal from "@/store/togglemodal/ToggleModal";

const Modal = ({ children, title }: any) => {
  const { open, setOpen } = useModal();

  return (
    <>
      {open && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          {/* MODAL BOX */}

          <div className="w-[95%] max-w-4xl rounded bg-white shadow overflow-hidden border border-slate-200">
            {/* HEADER */}

            <div className="primary-bg px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">
                {title}
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="h-9 w-9 rounded-xl bg-white/10 text-white hover:bg-white/20 transition"
              >
                ✕
              </button>
            </div>

            {/* BODY */}

            <div className="max-h-[60vh] overflow-y-auto p-5">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;