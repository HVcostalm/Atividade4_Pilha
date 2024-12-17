import {Pilha} from "./pilha";
import { IPessoa } from "./type";

const pessoaPilha = new Pilha<IPessoa>();

pessoaPilha.adicionar({ nome: "Alice", idade: 25, cpf:"14523678950" });
pessoaPilha.adicionar({ nome: "Bob", idade: 30, cpf:"63254189750" });
pessoaPilha.adicionar({ nome: "Charlie", idade: 35, cpf:"12364579850" });

console.log("Tamanho da pilha antes do pop");
console.log(pessoaPilha.tamanho()); // 3

console.log("Todos os elementos da pilha antes do pop");
console.log(pessoaPilha.mostrar());

console.log("Mostrando o elemento no topo");
console.log(pessoaPilha.mostrarElementoTopo()); // { nome: "Charlie", idade: 35, cpf:"12364579850" }

console.log("Apagando o elemento do topo e retornando qual é");
console.log(pessoaPilha.remover());  // { nome: "Charlie", idade: 35, cpf:"12364579850" }

console.log("Mostrando o elemento no topo atual");
console.log(pessoaPilha.mostrarElementoTopo()); // { nome: "Charlie", idade: 35, cpf:"12364579850" }

console.log("Tamanho da pilha após o pop");
console.log(pessoaPilha.tamanho()); // 2

console.log("Todos os elementos da pilha após o pop");
console.log(pessoaPilha.mostrar());