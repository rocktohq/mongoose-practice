export interface UserName {
  firstName: string;
  lastName: string;
}

export interface Guardian {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherContactNo: string;
}

export interface LocalGuardian {
  name: string;
  occupation: string;
  concatNo: string;
  address: string;
}

export interface Student {
  id: string;
  name: UserName;
  gender: "male" | "female" | "other";
  age: number;
  email: string;
  dob: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodType:
    | "A"
    | "A+"
    | "A-"
    | "B"
    | "B+"
    | "B-"
    | "AB"
    | "AB+"
    | "AB-"
    | "O"
    | "O+"
    | "O-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: "active" | "disabled";
  isDeleted: boolean;
}
