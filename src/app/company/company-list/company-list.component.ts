import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  company: Company[] = [];
  selectCompany = new Company();
  sucessMessage: string = "";
  errrorMessage: string = "";

  constructor(
    private service: CompanyService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.service
      .getCompany()
      .subscribe(resposta => this.company = resposta)

  }

  novoCadastro() {
    this.router.navigate(['/company-form'])
  }

  preparaDelecao(company: Company) {
    this.selectCompany = company;

  }

  deleteCompany() {
    this.service
      .delete(this.selectCompany)
      .subscribe(response => {
        this.sucessMessage = 'Empresa deletado com sucesso!'
        this.ngOnInit();
      },
        error => this.errrorMessage = 'Falha ao deletar a Empresa')

  }

}
