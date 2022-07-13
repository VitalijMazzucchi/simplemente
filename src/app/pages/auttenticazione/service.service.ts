import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap } from 'rxjs';
import { ILogin } from './interfacce/i-login';
import { IUsers } from './interfacce/i-users';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  private linkserver = 'http://localhost:3000';
  authSubject = new BehaviorSubject<IUsers | null>(null);

  constructor(private http: HttpClient, private router: Router) {}

  login(obj: ILogin) {
    return this.http.post<IUsers>(this.linkserver + '/login', obj).pipe(
      tap((data) => {
        this.authSubject.next(data);
        localStorage.setItem('Utente', JSON.stringify(data));
      })
    );
  }

  logout() {
    localStorage.removeItem('Utente');
    this.authSubject.next(null);
    this.router.navigate(['/Login']);
  }
  registrazione(obj: IUsers) {
    return this.http.post(this.linkserver + '/register', obj);
  }
  addFattture() {}
}
