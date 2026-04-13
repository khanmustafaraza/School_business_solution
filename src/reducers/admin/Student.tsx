import {
  StudentActionType,
  StudentState,
  StudentFormData,
} from "@/types/admin/studenttype";

const initialFormData: StudentFormData = {
  admissionNo: "",
  rollNo: "",
  firstName: "",
  lastName: "",
  gender: "",
  dob: "",
  bloodGroup: "",
  religion: "",
  category: "",
  aadhaar: "",

  className: "",
  section: "",
  academicYear: "",
  house: "",
  admissionDate: "",

  mobile: "",
  email: "",
  address: "",
  city: "",
  state: "",
  pincode: "",

  fatherName: "",
  motherName: "",
  guardianName: "",
  parentMobile: "",
  occupation: "",

  medicalCondition: "",
  allergies: "",
  emergencyContact: "",
  transportRequired: "",

  notes: "",
  photo: null,
};

const studentReducer = (
  state: StudentState,
  action: StudentActionType,
): StudentState => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "HANDLE_CHANGE":
      return {
        ...state,
        studentObj: {
          ...state.studentObj,
          [action.payload.name]: action.payload.value,
        },
      };

    case "RESET_FORM":
      return {
        ...state,
        studentObj: initialFormData,
      };
    case "SET_STUDENTS":
      return { ...state, studentList: action.payload };

    default:
      return state;
  }
};

export default studentReducer;
