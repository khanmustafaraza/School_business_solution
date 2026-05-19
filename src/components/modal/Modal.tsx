"use client";

import useModal from "@/store/togglemodal/ToggleModal";


const Modal = ({children,title}:any) => {
   const {setOpen,open,openModal,closeModal} =  useModal()

  // ✅ STATE
 

  return (
    <div className="p-10">

      {/* OPEN MODAL BUTTON */}

      {/* <button
        onClick={() => setOpen(true)}
        className="px-5 py-2 rounded-xl secondary-bg text-white"
      >
        Open Modal
      </button> */}

      {/* MODAL */}

      {
        open && (
          <div className=" flex items-center justify-center ">

            {/* MODAL BOX */}

            <div className="absolute z-50 w-[90%] max-w-2xl rounded-3xl bg-white shadow-[0_20px_80px_rgba(0,0,0,0.25)] overflow-hidden">

              {/* HEADER */}

              <div className="primary-bg px-6 py-4 flex items-center justify-between">

                <h2 className="text-xl font-semibold text-white">
                  {title}
                </h2>

                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                >
                  ✕
                </button>

              </div>

              {/* BODY */}

              <div className="p-6">

               {children}

              </div>

              {/* FOOTER */}

            </div>
          </div>
        )
      }
    </div>
  );
};

export default Modal;