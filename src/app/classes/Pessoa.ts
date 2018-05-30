import { Telefone } from '../classes/Telefone';
export class Pessoa{
    id: number;
    nome: string;
    cpf: string;
    dataNascimento: Date;
    email: string;  
    telefones: Telefone[];
}