import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../../company.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  company: Company;
  success: boolean = false;
  errors: String[] | null = [];
  id: number = 0;

  constructor(
    private service: CompanyService,
    private router: Router,
    private activeted: ActivatedRoute
  ) {

    this.company = new Company();


  }

  ngOnInit(): void {
    let parms: Observable<Params> = this.activeted.params
    parms.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getCompanyById(this.id)
          .subscribe(resposta => this.company = resposta,
            errorResponse => this.company = new Company()
          )

      }
    })

  }

  coltarParaListagem() {
    this.router.navigate(['/company-list'])
  }

  onSubmit() {
    if (this.id) {
      this.service
      .update(this.company)
      .subscribe(response => {
        this.success = true;
        this.errors = null;
      }, errorResponse => {
        this.errors = [ 'Erro ao Atualizar.']
      }
      )


    } else {
      this.service
        .save(this.company)
        .subscribe(response => {
          this.success = true;
          this.errors = [];
        }, errorResponse => {
          this.success = false;
          this.errors = errorResponse.error.errors;

        }

        )

    }

  }
}
