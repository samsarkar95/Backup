import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Skill } from '../skill';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    MatDialogModule,
    MatTooltipModule,
  ],
})
export class AddDataComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private dialog: MatDialog,
    private employeeService: EmployeeService
  ) {}

  primarySkill!: string;
  isEditable = false;
  successMessage = '';
  errorMessage = '';

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  uploadedFiles: File[] = [];
  fileCount: number = 0;

  dataValidate() {
    let a = this.primarySkill;
    let res: Boolean;
    if (a != null) {
      res = true;
    } else res = false;
    return res;
  }

  isLinear = false;

  @ViewChild('search') searchTextBox: any = ElementRef;

  selectFormControl = new FormControl();
  searchTextboxControl = new FormControl();
  selectedValues: any = [];
  otherFieldData: string = '';

  certifications!: string;

  filteredOptions: any = Observable<any[]>;

  ngOnInit() {
    this.employeeService.getSkills().subscribe((data) => {
      this.skillsList = data;
    });
  }

  otherSkills: Boolean = false;

  showOtherSkillInput() {
    this.otherSkills = !this.otherSkills;
  }

  skills = new FormControl('');
  otherSkillsSet = new FormControl('');
  skillsList!: Skill[];

  maxSelection: number = 3;
  selectedSkills: string[] = [];
  isBtnDisabled: boolean = false;
  isSkillDisabled(skill: string): boolean {
    return (
      this.selectedSkills.length >= this.maxSelection &&
      !this.selectedSkills.includes(skill)
    );
  }

  onFileChange(event: any) {
    // this.employee.profileLink = event.target.value;
    const files: FileList = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      this.uploadedFiles.push(file);
    }
    this.fileCount = this.uploadedFiles.length;
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent, {
      height: '150px',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // POST Method

  employee: any = new Employee();

  saveEmployee() {
    console.log('Submit started');
    console.log(this.employee);
    const skillsString = this.selectedSkills.join(',');
    this.employee.employeeId = 1250100;
    this.employee.employeeName = 'Aditya Singh';
    this.employee.emailId = 'adityasingh@infosys.com';
    this.employee.skills = this.selectedSkills;
    this.employee.primarySkill = this.primarySkill;

    this.employeeService.createEmployee(this.employee).subscribe(
      (data) => {
        this.employee = data;
      },
      (error) => {
        this.errorMessage = error.error.message;
      }
    );
    this.successMessage = 'Successfully Registered';
  }

  onSubmit(stepper: any) {
    this.saveEmployee();
    stepper.reset();
  }
  reset() {
    this.successMessage = '';
    this.errorMessage = '';
  }
}
