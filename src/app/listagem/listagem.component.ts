import { Component, OnInit } from '@angular/core';
import {DataTableModule} from 'primeng/datatable';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  pessoas =  [];  

  constructor(private pessoaService : PessoaService){}

  ngOnInit(){
    this.pessoaService.consultar()
    .then(pessoa => {
        console.log(pessoa);
    });
  }
}
