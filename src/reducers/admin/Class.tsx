import { ClassActionType, ClassStateType } from "@/types/admin/classtype";

export const ClassReducer = (
  state: ClassStateType,
  action: ClassActionType,
): ClassStateType => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "HANDLE_CHANGE":
      return {
        ...state,
        classObj: {
          ...state.classObj,
          [action.payload.name]: action.payload.value,
        },
      };
      case "SET_CLASS_LIST":
  return {
    ...state,
    classList: action.payload,
  };

    default:
      return state;
  }
};
