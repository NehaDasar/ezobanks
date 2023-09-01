import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  items: any[] = [];


  constructor(private http: HttpClient) { }
  
  
}
