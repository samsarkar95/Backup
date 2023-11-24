import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { Observable, map, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css'],
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
    MatTooltipModule
  ]
  
})


export class AddDataComponent {

  
  constructor(private _formBuilder: FormBuilder, private dialog: MatDialog, private employeeService: EmployeeService) { }

  primarySkill: any = 'Java';


  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  uploadedFiles: File[]=[];
  fileCount: number = 0;

  dataValidate() {
    let a = this.primarySkill;
    let res: Boolean;
    if (a != null) {
      res = true;
    }
    else res = false
    return res;
  }

  isLinear = false;

  @ViewChild('search') searchTextBox: any = ElementRef;

  selectFormControl = new FormControl();
  searchTextboxControl = new FormControl();
  selectedValues: any = [];
  otherFieldData: string = "";

  data: string[] = [
    'Java Devlp.', 
    'Frontend Devlp', 
    'Springboot Assoc.', 
    'Angular Devlp.', 
    'DB Progmr.', 
    'SQL Assoc.',
  ]
  
  filteredOptions: any = Observable<any[]>;

  ngOnInit() {
    this.filteredOptions = this.searchTextboxControl.valueChanges
      .pipe(
        startWith<string>(''),
        map(name => this._filter(name))
      );
  }

  private _filter(name: string): String[] {
    const filterValue = name.toLowerCase();
    this.setSelectedValues();
    this.selectFormControl.patchValue(this.selectedValues);
    let filteredList = this.data.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    return filteredList;
  }

  selectionChange(event:any) {
    if (event.isUserInput && event.source.selected == false) {
      let index = this.selectedValues.indexOf(event.source.value);
      this.selectedValues.splice(index, 1)
    }
  }

  openedChange(e:any) {
    this.searchTextboxControl.patchValue('')
    if (e == true) {
      this.searchTextBox.nativeElement.focus();
    }
  }

  
  clearSearch(event:any) {
    event.stopPropagation();
    this.searchTextboxControl.patchValue('');
  }
  
  setSelectedValues() {
    console.log('selectFormControl', this.selectFormControl.value);
    if (this.selectFormControl.value && this.selectFormControl.value.length > 0) {
      this.selectFormControl.value.forEach((e:any) => {
        if (this.selectedValues.indexOf(e) == -1) {
          this.selectedValues.push(e);
        }
      });
    }
  }
  
  otherSkills: Boolean = false;

  showOtherSkillInput(){
    this.otherSkills = !this.otherSkills;
  }

  skills = new FormControl('');
  otherSkillsSet = new FormControl('');
  skillsList: string[] = [
    
    'Java',
    'Python',
    'Angular',
    'Springboot',
    'Javascript',
    'Typescript',
    'HTML',
    'CSS',
    'MySQL'
  ];

  onFileChange(event:any){
    
    // this.employee.profileLink = event.target.value;
    const files:FileList = event.target.files;
    
    for(let i=0; i<files.length; i++){
      const file = files[i];
      this.uploadedFiles.push(file);
    }
    this.fileCount = this.uploadedFiles.length;
  }
  
  openDialog(){
    const dialogRef = this.dialog.open(PopUpComponent,  {
      height: '150px',
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    
  }

  // POST Method

  employee: any = new Employee();

  saveEmployee(){
    console.log('Submit started')
      this.employeeService.createEmployee(this.employee).subscribe(data =>{
        this.employee = data;
      },
        (    error: any) => console.log(error));

        console.log('Submit Done')
    
    
      
  }

  onSubmit(){
    console.log('Proceeded')
    this.saveEmployee();
  }

}
