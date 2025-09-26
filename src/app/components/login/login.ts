import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    if (this.auth.login(this.email, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.error = 'Email ou mot de passe incorrect.';
    }
  }
}
