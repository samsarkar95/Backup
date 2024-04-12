import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { observable } from 'rxjs';

@Component({

  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']

})

export class EditEmpComponent implements OnInit {

  title = 'Employee Portal';

  empformlabel = 'Edit Employee Details';

  empformbtn = 'Update';

  isDisabled : boolean=true;

  alertswitch : boolean=false;
 

  // @Input() public editDefaultData : EmployeeService;

  constructor(private formBuilder: FormBuilder, private router: Router, public empService: EmployeeService) { }

  editForm: FormGroup | any;

  addForm: FormGroup | any;

  ngOnInit(): void {

    this.editForm = this.formBuilder.group({

      id: [],
      employee_name: ["Priti", Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      emailid: ['',Validators.required],
      skills: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]]
    });

    this.addForm = this.formBuilder.group({

      id: [],
      employee_name: ['PRITI', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      emailid: ['', Validators.required],
      skills: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]]

    });
  }

  onUpdate() {
    this.empService.alertswitch = true;
    this.empService.alertswitch1= false;
    //this.empService.alertswitch2 = false;
    this.empService.alertswitch3 = false;
    console.log('Update fire');
    this.empService.updateEmployee(this.editForm.value).subscribe(data => {
      this.router.navigate(['list-emp']);

    });
  }
  onReset() {
    // this.editForm.restForm({employee_name:'PRiti'})
    this.editForm.get('id').setValue(this.empService.id)
    this.editForm.get('employee_name').setValue(this.empService.employee_name)
    this.editForm.get('designation').setValue(this.empService.designation)
    this.editForm.get('department').setValue(this.empService.department)
    this.editForm.get('emailid').setValue(this.empService.emailid)
    this.editForm.get('skills').setValue(this.empService.skills)
    this.editForm.get('mobileNumber').setValue(this.empService.mobileNumber)
  }
  
  onClose(){
    this.empService.alertswitch3 = false;
    this.router.navigate(['list-emp']);
  }
}