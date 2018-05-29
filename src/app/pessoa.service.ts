import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Pessoa } from './classes/Pessoa';

@Injectable()
export class PessoaService {

  constructor(private http : Http) { }

  consultarPessoas() {
    return this.http.get('http://localhost:3000/pessoas');
  }

  consultarPessoa(id : number) {
    return this.http.get('http://localhost:3000/pessoas/' + id);
  }

  deletarPessoa(id : number) {
    console.log('entrou no metodo no delete');
    return this.http.delete('http://localhost:3000/pessoas/' + id);
  }
  
  atualizarPessoa(id : number, p) {
    return this.http.put('http://localhost:3000/pessoas/' + id, p);
  }

  cadastarPessoa(p) {
    return this.http.post('http://localhost:3000/pessoas', p);
  }

}
