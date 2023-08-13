import { Injectable } from '@angular/core';
import { Company } from './company/company';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) {

  }

  save(company: Company): Observable<Company> {
    return this.http.post<Company>('http://localhost:8080/api/empresa', company);

  }


  getCompany(): Observable<Company[]> {

    return this.http.get<Company[]>('http://localhost:8080/api/empresa')

  }

  getCompanyById(id: number) : Observable<Company>{
    return this.http.get<any>(`http://localhost:8080/api/empresa/${id}`)

  }

  update(company: Company): Observable<any> {
    return this.http.put<Company>(`http://localhost:8080/api/empresa/${company.id}`, company);

  }

  delete(company: Company) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/empresa/${company.id}`)

  }

}
