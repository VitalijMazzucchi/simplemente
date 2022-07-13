import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from 'src/app/pages/auttenticazione/service.service';

@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss'],
})
export class FattureComponent {
  fatture: [] = [];
  error = undefined;
  constructor(private service: ServiceService, private http: HttpClient) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  displayedColumns: string[] = ['stato', 'causale', 'data', 'importo'];
  dataSource = new MatTableDataSource(this.fatture);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  getAllUsers() {
    console.log('Chiamata Ajax al server');
    this.service.authSubject.subscribe((userLogin) => {
      this.http.get<[]>('http://localhost:3000/fatture').subscribe(
        (resp) => {
          console.log(resp);
          this.fatture = resp;
        },
        (err) => {
          console.log(err);
          this.error = err.error;
        }
      );
    });
  }
}
