import { Component, OnInit } from '@angular/core';
import { empModel } from '../employees.model';
import { AllApiService } from '../services/all-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  employee: empModel = {}
  allemployees: any = []

  constructor(private api: AllApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllEmpAPI().subscribe((result: any) => {
      this.allemployees = result
    })
  }

  addEmp() {
    const existingEmp = this.allemployees.find((item: any) => item.id == this.employee.id)
    if (existingEmp) {
      alert("Id already exist!!! Use unique id to add an employee")
    } else {
      this.api.saveEmpAPI(this.employee).subscribe({
        next: (result: any) => {
          console.log(result);
          alert(`${result.name} has successfully added to our DB`)
          this.router.navigateByUrl('')
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
  }

  cancel() {
    this.employee = {}
    this.router.navigateByUrl('')
  }
}
