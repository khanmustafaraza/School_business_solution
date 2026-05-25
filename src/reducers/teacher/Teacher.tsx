"use client"
import {
  TeacherActionType,
  TeacherStateType,
} from "@/types/teachertypes/teachertype";

const TeacherReducer = (
  state: TeacherStateType,
  action: TeacherActionType,
): TeacherStateType => {
  switch (action.type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        teacherObj: {
          ...state.teacherObj,
          [action.payload.name]: action.payload.value,
        },
      };
    case "HANDLE_FILE_CHANGE":
      return {
        ...state,
        teacherObj: {
          ...state.teacherObj,
          [action.payload.name]: action.payload.value,
        },
      };
    default:
      return state;
  }
};

export default TeacherReducer;
