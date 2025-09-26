import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    if (this.auth.register(this.email, this.password)) {
      this.router.navigate(['/login']);
    } else {
      this.error = "L'email existe déjà.";
    }
  }
}
