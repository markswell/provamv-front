import { Telefone } from '../classes/Telefone';
export class Pessoa{
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: string;
    email: string;  
    telefones: Telefone[];
}