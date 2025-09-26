
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class Register{
  error = '';
  formRegister: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    const email = this.formRegister.value.email;
    const password = this.formRegister.value.password;
    if (this.auth.register(email, password)) {
      this.router.navigate(['/login']);
    } else {
      this.error = "L'email existe déjà.";
    }
  }
}
