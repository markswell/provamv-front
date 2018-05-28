import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PessoaService {

  constructor(private http : Http) { }

  consultar() : Promise<any> {
    return this.http.get('http://localhost:3000/pessoas')
    .toPromise()
    .then(response => {
      response = response.json()
      console.log(response)
    });
  }

}
