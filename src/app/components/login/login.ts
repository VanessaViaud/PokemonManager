
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  imports: [ReactiveFormsModule],
  styleUrls: ['./login.scss']
})
export class Login {
  error = '';
  formLogin: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    const email = this.formLogin.value.email;
    const password = this.formLogin.value.password;
    if (this.auth.login(email, password)) {
      this.router.navigate(['/']);
    } else {
      this.error = 'Email ou mot de passe incorrect.';
    }
  }
}
