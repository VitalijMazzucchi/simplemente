import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUserToken } from 'src/app/pages/auttenticazione/interfacce/i-user-token';
import { IUsers } from 'src/app/pages/auttenticazione/interfacce/i-users';
import { ServiceService } from 'src/app/pages/auttenticazione/service.service';
import { Observable, PartialObserver, interval} from 'rxjs';
import { filter } from 'rxjs/operators'

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss'],
})
export class ClientiComponent implements OnInit {
  users: any = [];
  error = undefined;
  tmpObj: any;
  utLoggato=localStorage.getItem('Utente')
  /* luigino =<string |null>JSON.parse(this.utLoggato)  */




  constructor(private service: ServiceService, private http: HttpClient) {}

  ngOnInit(): void {


    this.getAllUsers();
    console.log(this.utLoggato)
  }
  displayedColumns: string[] = ['firstname', 'lastname', 'role', 'email'];
  dataSource = new MatTableDataSource(this.users);

  applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

arrFil:any = []



    getAllUsers() {
      this.service.getClienti().subscribe((users) => {
        this.http
          .get('http://localhost:3000/users', {
            headers: new HttpHeaders({
              Authorization: 'Bearer' +users
            }),
          })
          .subscribe(
            (resp) => {
              console.log(resp);
              this.users = resp;
              this.users = this.users.filter((ele: { roles: string; }) => ele.roles == 'cliente');
              this.dataSource = new MatTableDataSource(this.users);
            },
            (err) => {
              console.log(err);
              this.error = err.error;
            }
          );
      });

    }
  }



