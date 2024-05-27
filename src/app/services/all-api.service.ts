import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { empModel } from '../employees.model';

@Injectable({
  providedIn: 'root'
})
export class AllApiService {

  server_url = "https://angulartestservermay24.onrender.com"
  constructor(private http: HttpClient) { }

  saveEmpAPI(employee: empModel) {
    return this.http.post(`${this.server_url}/employees`, employee)
  }

  getAllEmpAPI() {
    return this.http.get(`${this.server_url}/employees`)
  }

  getAnEmpAPI(id: any) {
    return this.http.get(`${this.server_url}/employees/${id}`)
  }

  updateEmpAPI(employee: empModel) {
    return this.http.put(`${this.server_url}/employees/${employee.id}`, employee)
  }

  removeEmpAPI(id: any) {
    return this.http.delete(`${this.server_url}/employees/${id}`)
  }
}
