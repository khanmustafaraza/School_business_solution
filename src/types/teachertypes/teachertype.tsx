export type TeacherType = {
  _id?: string;
  firstName: string;
  lastName: string;
  gender: String;
  classId?: string;
  dob: string;
  subject: string;
  qualification: string;
  exp: number;
  doj: string;
  mobile: string;
  address: string;
  adhaar: number;
};

export type TeacherStateType = {
  teacherObj: {
    firstName: "";
    lastName: "";
    gender: "";
    classId?: "";
    dob: "";
    subject: "";
    qualification: "";
    exp: 0;
    doj: "";
    mobile: "";
    address: "";
    adhaar: 0;
    photo: null | File;
  };
  teacherList: TeacherType[];
  isLoading: boolean;
};

export type TeacherContextType = {
  state: TeacherStateType;
  handleChange: (e: any) => void;
  handleFileChange: (e: any) => void;
    handleSubmit: (e: any,role:any,userId:any) => Promise<void>;
};

export type TeacherActionType =
  | { type: "SET_LOADING"; payload: any }
  | { type: "HANDLE_CHANGE"; payload: { name: any; value: any } }
  | { type: "HANDLE_FILE_CHANGE"; payload: {name:any, value: any } };
