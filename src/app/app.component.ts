import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '05-Conneting-BackEnd-App';

  msg:String="Hi,I'm FrontEnd";

  constructor(private httpClient:HttpClient){}
  getMessage(){
    this.httpClient.get("http://localhost:8080/",{responseType:'text'})
    .subscribe(response =>{
      this.msg=response;
    })
  }
}
