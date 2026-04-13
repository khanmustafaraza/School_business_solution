export type StudentFormData = {
  admissionNo: string;
  rollNo: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  bloodGroup: string;
  religion: string;
  category: string;
  aadhaar: string;

  className: string;
  section: string;
  academicYear: string;
  house: string;
  admissionDate: string;

  mobile: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;

  fatherName: string;
  motherName: string;
  guardianName: string;
  parentMobile: string;
  occupation: string;

  medicalCondition: string;
  allergies: string;
  emergencyContact: string;
  transportRequired: string;

  notes: string;

  photo: File | null;
};

export type StudentListType = {
  _id: string;
  admissionNo: string;
  firstName: string;
  lastName: string;
  className: string;
  section: string;
  email: string;
};

export type StudentState = {
  isLoading: boolean;
  studentObj: StudentFormData;
};

export type StudentContextType = {
  state: StudentState;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
};

export type StudentActionType =
  | { type: "SET_LOADING" }
  | {
      type: "HANDLE_CHANGE";
      payload: {
        name: keyof StudentFormData;
        value: string | File | null;
      };
    }
  | { type: "RESET_FORM" };