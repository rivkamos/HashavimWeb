  export class User {
    id: number;
    name: string;
    lastName: string;
    phoneNumber: string;
    address: string;
    gender: Gender;
    departmentType: DepartmentType;
    workerType: WorkerType;
  
    constructor(
      id: number,
      name: string,
      lastName: string,
      phoneNumber: string,
      address: string,
      gender: Gender,
      departmentType: DepartmentType,
      workerType: WorkerType
    ) {
      this.id = id;
      this.name = name;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.address = address;
      this.gender = gender;
      this.departmentType = departmentType;
      this.workerType = workerType;
    }
  }
  
  export enum Gender {
    male = 0,
    female = 1
  }
  
  export enum DepartmentType {
    general = 0,
    acounting = 1,
    sales = 2,
    engineering = 3,
    security = 4
  }
  
  export enum WorkerType {
    generalManager = 0,
    departmentManager = 1,
    teamManager = 2,
    proffesional = 3,
    secretery = 4
  }

  