import { Injectable } from '@angular/core';

interface User {
  email: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private users: User[] = [];
  private currentUser: User | null = null;

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  register(email: string, password: string): boolean {
    if (this.users.find(u => u.email === email)) {
      return false;
    }
    this.users.push({ email, password });
    return true;
  }

  logout() {
    this.currentUser = null;
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
