import { Component, OnInit } from '@angular/core';
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
      (json) => {},(err)=>{
          console.log(err);
        });
    location.reload();
  }

  pesquisar(nome : string, cpf : string){
    if(cpf === ''){
      this.pesquisarNome(nome);
    }else {
      this.pesquisarCpf(cpf);
    }
  }

  pesquisarCpf(cpf : string){
    this.pessoaService.consultarPessoaCpf(cpf)
    .subscribe(
      (json) => {
        this.pessoas = json.json();
      },(err)=>{
        alert('nemhum, resultado encontrado');
        location.reload();
        });
  }

  pesquisarNome(nome : string){
    this.pessoaService.consultarPessoaNome(nome)
    .subscribe(
      (json) => {
        this.pessoas = json.json();
      },(err)=>{
          alert('nemhum, resultado encontrado');
          location.reload();
        });
  }
  
}
