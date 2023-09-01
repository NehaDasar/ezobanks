import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  
  public productList : any;
  items: any[] = [];

  constructor(private http : HttpClient){

  }
  ngOnInit() {
    this.http.get('https://db.ezobooks.in/kappa/image/task').subscribe((data: any) => {
      this.items = data.items;
    });
}

}
