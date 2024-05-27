import { Component, OnInit } from '@angular/core';
import { empModel } from '../employees.model';
import { AllApiService } from '../services/all-api.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  allEmployees: empModel[] = []

  constructor(private api: AllApiService) { }

  ngOnInit(): void {
    this.getAllEmps()
  }

  getAllEmps() {
    this.api.getAllEmpAPI().subscribe((result: any) => {
      this.allEmployees = result
      console.log(this.allEmployees);
    })
  }

  deleteEmp(id: any) {
    this.api.removeEmpAPI(id).subscribe((result: any) => {
      this.getAllEmps()
    })
  }
}
