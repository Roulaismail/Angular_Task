import { Component } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private loginService:LoginService){}
logout(){
  return this.loginService.logOut();
}
}
