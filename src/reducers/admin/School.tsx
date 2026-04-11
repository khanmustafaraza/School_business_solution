import { SchoolAction, SchoolState } from "@/types/schooltype";

export const schoolReducer = (state: SchoolState, action: SchoolAction): SchoolState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_SCHOOL":
      return {
        ...state,
        schoolObj: {
          ...state.schoolObj,
          [action.payload.name]: action.payload.value, // update the correct field dynamically
        },
      };
      case "SET_SCHOOLS":
  return {
    ...state,
    schools: action.payload,
  };

    default:
      return state;
  }
};
