import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUserToken } from 'src/app/pages/auttenticazione/interfacce/i-user-token';
import { IUsers } from 'src/app/pages/auttenticazione/interfacce/i-users';
import { ServiceService } from 'src/app/pages/auttenticazione/service.service';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss'],
})
export class ClientiComponent implements OnInit {
  users: any = [];
  error = undefined;

  constructor(private service: ServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllUsers();
    console.log(this.users);
  }
  displayedColumns: string[] = ['firstname', 'lastname', 'role'];
  dataSource = new MatTableDataSource(this.users);

  applyFilter(event: Event) {
    /*  const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); */
  }

    getAllUsers() {
      this.service.getClienti().subscribe((userLogin) => {
        this.http
          .get('http://localhost:3000/users', {
            headers: new HttpHeaders({
              Authorization: 'Bearer' + userLogin?.AccessToken,
            }),
          })
          .subscribe(
            (resp) => {
              console.log(resp);
              this.users = resp;
            },
            (err) => {
              console.log(err);
              this.error = err.error;
            }
          );
      });
    }
  }




