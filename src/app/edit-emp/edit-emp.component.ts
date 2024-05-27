import { Component, OnInit } from '@angular/core';
import { empModel } from '../employees.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AllApiService } from '../services/all-api.service';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  employee: empModel = {}
  constructor(private route: ActivatedRoute, private api: AllApiService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((result: any) => {
      console.log(result);
      const { id } = result
      console.log(id);
      this.getEmpDetails(id)
    })
  }

  getEmpDetails(id: any) {
    this.api.getAnEmpAPI(id).subscribe((result: any) => {
      this.employee = result
      console.log(this.employee);
    })
  }

  cancel(id: any) {
    this.getEmpDetails(id)
    this.router.navigateByUrl('')
    
  }

  updateEmp() {
    this.api.updateEmpAPI(this.employee).subscribe((result: any) => {
      alert("User updated successfully!!!")
      this.router.navigateByUrl('')
    })
  }
}
