import {
  TransferActionType,
  TransferState,
} from "@/types/admintypes/transfertype";

const TransferReducer = (
  state: TransferState,
  action: TransferActionType,
): TransferState => {
  switch (action.type) {
    /* ================= SET LOADING ================= */
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    /* ================= HANDLE CHANGE ================= */
    case "HANDLE_CHANGE":
      return {
        ...state,
        transferObj: {
          ...state.transferObj,
          [action.payload.name]: action.payload.value,
        },
      };

    /* ================= SET ALL TRANSFERS ================= */
    case "SET_TRANSFERS":
      return {
        ...state,
        transferList: action.payload,
        isLoading: false,
      };

    /* ================= SET SINGLE TRANSFER ================= */
    case "SET_TRANSFER":
      return {
        ...state,
        transferObj: action.payload,
        isLoading: false,
      };

    /* ================= RESET FORM ================= */
    case "RESET_FORM":
      return {
        ...state,
        transferObj: {
          pupilName: "",
          motherName: "",
          fatherName: "",
          nationality: "",
          category: "",

          dobFigures: "",
          dobWords: "",

          firstAdmissionDate: "",
          firstAdmissionClass: "",

          subjects: "",
          lastClassStudied: "",
          lastExam: "",

          promotionStatus: "",
          failedStatus: "",

          duesPaid: "",
          feeConcession: "",

          nccScoutGuide: "",

          struckOffDate: "",
          leavingReason: "",

          totalMeetings: "",
          attendanceDays: "",

          generalConduct: "",
          remarks: "",

          issueDate: "",
        },
      };

    /* ================= DEFAULT ================= */
    default:
      return state;
  }
};

export default TransferReducer;
