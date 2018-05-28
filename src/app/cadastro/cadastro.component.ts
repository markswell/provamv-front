import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  botao = 'Adiciona'

  telefones = [{
    id : '1',
    ddd : '85',
    numero:'88134626'
  },{
    id : '2',
    ddd : '85',
    numero:'88134626'
  },{
    id : '3',
    ddd : '85',
    numero:'88134626'
  }];
  

}
