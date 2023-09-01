import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url1="http://localhost:3000/items";

  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<any>("https://db.ezobooks.in/kappa/image/task")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
