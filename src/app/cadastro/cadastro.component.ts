import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../classes/Pessoa';
import { Telefone } from '../classes/Telefone';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  pessoa = new Pessoa;
  tel = new Telefone;
  telefones = [];
  botao = 'Cadastrar';

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private service : PessoaService
  ){}

  ngOnInit(){
    const codigo = this.route.snapshot.params['id'];

    if(codigo){
      this.carregarPessoas(codigo);
    }
  }

  carregarPessoas(cod : number){
      this.service.consultarPessoa(cod).subscribe(
        (json) => {
        this.pessoa =  json.json();
        this.telefones = this.pessoa.telefones; 
        if(this.pessoa.nome != ''){
          this.botao = 'Atualiza';
        }         
      },
    (err)=>{
      console.log(err);
    });
  }

  adicionar(nome : any, cpf : any, dataNascimento : any, email : any){
    this.pessoa.nome = nome.value;
    this.pessoa.cpf = cpf.value;
    this.pessoa.dataNascimento = dataNascimento.value;
    this.pessoa.email = email.value;
    this.pessoa.telefones = this.telefones;
    if(this.pessoa.id == null){
      this.casdastrar(); 
    }else{
      this.atualizar();
    }
    
  }

  casdastrar(){
    this.service.cadastarPessoa(this.pessoa).subscribe(
      (json) => {
      this.pessoa =  json.json();
      this.telefones = this.pessoa.telefones; 
             
    },
    (err)=>{
      console.log(err);
    });
  }

  atualizar(){
    this.service.atualizarPessoa(this.pessoa.id, this.pessoa).subscribe(
      (json) => {
      this.pessoa =  json.json();
      this.telefones = this.pessoa.telefones; 
      this.botao = 'Atualiza';
    },
  (err)=>{
    console.log(err);
  }); 
  }

  adicionarTel(ddd: any, numero: any){
    this.tel.ddd = ddd.value;
    this.tel.numero = numero.value;
    this.telefones.push(this.tel);
  }

  voltar(){
    location.reload();
    this.router.navigate(['/pessoas']);
  }

  deletar(t : Telefone){
   this.telefones.forEach((te)=>{
     if(t.id === te.id){
       this.telefones.splice(te);
     }
   } );
  }

}
