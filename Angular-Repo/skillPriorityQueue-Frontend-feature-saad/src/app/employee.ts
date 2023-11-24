//Below code is just to test whether data is getting POST in database or not.

export class Employee {
    id!: number;
    employeeId : number = 12345;
    fullName: string = "Unknown";
    emailId: string = "unknown@test.com";
    primarySkill:string = "Java";
    skills:any = "Python, Angular";
    profileLink:string = "None";
    description: string = "Not Available";
    certification:string = "X,Y,Z";
}