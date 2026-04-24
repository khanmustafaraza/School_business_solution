import { EnquiryAction, EnquiryStateType } from "@/types/enquiry/enquirytype";

const EnquiryReducer = (
  state: EnquiryStateType,
  action: EnquiryAction
): EnquiryStateType => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "HANDLE_CHANGE":
      return {
        ...state,
        enquiryObj: {
          ...state.enquiryObj,
          [action.payload.key]: action.payload.value,
        },
      };

    case "SET_SUCCESS":
      return {
        ...state,
        isLoading: { loading: false, message: "Success" },
        enquiryObj: {
          name: "",
          mobile: "",
          addmissionClass: "",
          message: "",
        },
      };

    case "SET_ENQUIRY_LIST":
      return { ...state, enquiryList: action.payload };

    default:
      return state;
  }
}; 


export default EnquiryReducer
