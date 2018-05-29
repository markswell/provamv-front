import { Component, OnInit } from '@angular/core';
import {DataTableModule} from 'primeng/datatable';
import { PessoaService } from '../pessoa.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  pessoas =  [];  

  constructor(private pessoaService : PessoaService){}

  ngOnInit(){
    this.pessoaService.consultarPessoas()
    .subscribe((json) => {
      this.pessoas = json.json();
    });
  }

  deletar(id : number){

    this.pessoaService.deletarPessoa(id).subscribe(
      (json) => {
        },
        (err)=>{
          console.log(err);
        });
    location.reload();
  }
}
