import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/pages/auttenticazione/service.service';

@Component({
  selector: 'app-crea-fatture',
  templateUrl: './crea-fatture.component.html',
  styleUrls: ['./crea-fatture.component.scss'],
})
export class CreaFattureComponent implements OnInit {
  selected = 'option1';
  selected2 = 1;
  @ViewChild('f') form!: NgForm;
  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  creaFatt() {
    console.log(this.form.value);
    this.service.addFatture(this.form.value).subscribe((resp) => {
      this.router.navigate(['fatture']);
    });
  }
}
