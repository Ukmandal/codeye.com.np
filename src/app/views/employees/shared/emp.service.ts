import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService {
  employees=[];
  constructor(private _http:Http) { }
  checkMe:any;
  getEmployees(){
    return this._http.get("http://localhost:8080/api/select.php/")
      .map(res=>{
        this.checkMe = res;
       
        if(this.checkMe._body !== "0"){
           return res.json()
        }
       
      });
  }
  addEmployee(info){
    return this._http.post("http://localhost:8080/api/insert.php",info)
      .map(()=>"");
  }
  
  loginEmployee(info){
    return this._http.post("http://localhost:8080/api/login.php",info)
      .map(()=>"");
  }
  getEmployee(id){
    return this._http.post("http://localhost:8080/api/selectone.php/",{'id':id})
      .map(res=>res.json());
  }
  deleteEmployee(id){
    return this._http.post("http://localhost:8080/api/delete.php/",{'id':id})
      .map(()=>this.getEmployees());
  }
  updateEmployee(info){
    return this._http.post("http://localhost:8080/api/update.php/", info)
      .map(()=>"");
  }
}
