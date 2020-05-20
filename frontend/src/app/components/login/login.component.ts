import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../../services/login.service";
import {Observable} from "rxjs";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user$: User;

  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit(): void {
  }

  login(login: string, password: string): void {
    this.loginService.authenticateUser(login, password).subscribe(data => {
      console.log(data.login);
      this.router.navigate(['/user']);
    });
  }

}
